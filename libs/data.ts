import { dbConnect } from "./dbConnect";
import { notFound } from "next/navigation";
import { auth } from "@/auth";
import Links from "@/models/linkModel";

export default async function getAllLinks() {
  try {
    await dbConnect();
    const session = await auth();
    const req = await Links.find({ user: session?.user?.email });
    return Response.json(req);
  } catch (error) {
    console.error(error);
    throw new Error(notFound());
  }
}
