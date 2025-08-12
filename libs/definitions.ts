import { Schema } from "./../node_modules/mongoose/types/index.d";
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
  image?: File;
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
