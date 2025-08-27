export interface SortableProps {
  id: number;
  index: number;
  color: string;
  name: string;
}

export interface LinkProps {
  user?: string;
  platform: string;
  url: string;
  showList?: boolean;
}

export type UserProps = {
  _id?: string;
  image?: {
    data: Buffer;
    contentType: string;
  };
  name?: string;
  email: string;
  password: string;
};

// Schema

import { z } from "zod";

export const registrationCredentials = z
  .object({
    email: z.email({ message: "Please enter a valid email address" }),
    password: z.string().min(8, { message: "Please check again" }),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  });

export const linkSchema = z.object({
  platform: z.string(),
  url: z.url({ message: "Enter a Valid Link" }),
});

export const profileSchema = z.object({
  fname: z.string().min(1, { message: "Can´t be empty" }),
  lname: z.string().min(1, { message: "Can´t be empty" }),
  email: z.email({ message: "Please enter a valid email address" }),
});
