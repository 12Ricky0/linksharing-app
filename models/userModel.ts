import mongoose from "mongoose";
import { UserProps } from "@/libs/definitions";
import { buffer } from "node:stream/consumers";

const userSchema = new mongoose.Schema<UserProps>({
  image: { data: Buffer, contentType: String },
  name: String,
  email: String,
  password: String,
});

const User =
  mongoose.models.User || mongoose.model<UserProps>("User", userSchema);

export default User;
