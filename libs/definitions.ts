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
  image?: string;
  name?: string;
  email: string;
  password: string;
};

type UrlProps = {
  _id?: string;
  platform: string;
  url: string;
};

export type UserUrlsProps = {
  _id?: string;
  user: string;
  urls: UrlProps[];
};

export enum Colors {
  GitHub = "#1A1A1A",
  "Frontend-Mentor" = "#D9D9D9",
  Twitter = "#43B7E9",
  LinkedIn = "#2D68FF",
  YouTube = "#EE3939",
  Facebook = "#2442AC",
  Twitch = "#EE3FC8",
  Devto = "#333333",
  Codewars = "#8A1A50",
  Codepen = "#EF6C35",
  freeCodeCamp = "#302267",
  GitLab = "#EB4925",
  Hashnode = "#0330D1",
  "Stack-Overflow" = "#EC7100",
}

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
