/* eslint-disable @typescript-eslint/no-explicit-any*/
"use server";
import User from "@/models/userModel";
import { dbConnect } from "./dbConnect";
import Links from "@/models/linkModel";
import {
  registrationCredentials,
  linkSchema,
  profileSchema,
} from "./definitions";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { notFound, redirect } from "next/navigation";
import { auth, signIn } from "@/auth";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";

export async function getUser(email: string) {
  try {
    await dbConnect();
    return User.findOne({ email: email });
  } catch (error) {
    console.error(error);
  }
}

export async function registerUser(previous: any, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const repeat_password = formData.get("repeat");
  await dbConnect();

  const validateCredentials = registrationCredentials.safeParse({
    email: email,
    password: password,
    confirm_password: repeat_password,
  });

  const user = await getUser(email!.toString());
  if (user) {
    return { message: "Email already in use" };
  }

  if (!validateCredentials.success) {
    return {
      errors: z.flattenError(validateCredentials.error).fieldErrors,
    };
  }

  try {
    const salt = bcrypt.genSaltSync(10);

    const { email, password } = validateCredentials.data;
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = {
      image: "",
      name: "",
      email: email,
      password: hashedPassword,
    };
    await User.create(user);
  } catch (error) {
    console.error(error);
    throw new Error(notFound());
  }
  redirect("/");
}

export async function authenticateUser(prevState: any, formData: FormData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
  redirect("/");
}

export async function createLink(prev: any, formData: FormData) {
  const session = await auth();
  const user = session?.user?.email;
  const platforms = formData.getAll("platform");
  const links = formData.getAll("link");

  const linksArraySchema = z.array(linkSchema);

  const linksData = platforms.map((p, i) => ({
    platform: p.toString(),
    url: links[i].toString() || "",
  }));

  const validateLinks = linksArraySchema.safeParse(linksData);
  if (!validateLinks.success) {
    return {
      errors: z.flattenError(validateLinks.error).fieldErrors,
    };
  }

  try {
    await dbConnect();
    await Links.findOneAndUpdate(
      { user },
      { $set: { urls: validateLinks.data } },
      { new: true, upsert: true } // upsert creates a new doc if none exists
    );
  } catch (error) {
    console.error(error);
  }
  revalidatePath("/link/home");
}

export async function createProfile(prev: any, formData: FormData) {
  const firstName = formData.get("first_name");
  const lastName = formData.get("last_name");
  const user = formData.get("email");
  // const session = await auth();
  // const user = session?.user?.email;

  const validateProfile = profileSchema.safeParse({
    fname: firstName,
    lname: lastName,
    email: user,
  });

  if (!validateProfile.success) {
    return {
      errors: z.flattenError(validateProfile.error).fieldErrors,
    };
  }
  const { fname, lname, email } = validateProfile.data;

  try {
    await dbConnect();
    const currentUser = await User.findOne({ email: email });
    // currentUser.image = picture;
    currentUser.name = fname + " " + lname;
    await currentUser.save();
  } catch (error) {
    console.error(error);
  }
  revalidatePath("/link/profile");
}
