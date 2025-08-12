/* eslint-disable @typescript-eslint/no-explicit-any*/
"use server";
import User from "@/models/userModel";
import { dbConnect } from "./dbConnect";
import Links from "@/models/linkModel";
import { registrationCredentials } from "./definitions";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { notFound, redirect } from "next/navigation";

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

  //   const user = await getUser(email!.toString());
  //   if (user) {
  //     return { message: "Email already in use" };
  //   }

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
