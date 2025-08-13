/* eslint-disable @typescript-eslint/no-explicit-any*/
"use server";
import User from "@/models/userModel";
import { dbConnect } from "./dbConnect";
import Links from "@/models/linkModel";
import { registrationCredentials } from "./definitions";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { notFound, redirect } from "next/navigation";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

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
    const user = { image: "", email: email, password: hashedPassword };
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

export async function Add_Link(id: string, prev: any, formData: FormData) {}
