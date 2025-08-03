import Login_Form from "@/components/auth/login_form";
import Register_Form from "@/components/auth/registeration_form";
import Header from "@/components/link/header";
import Empty from "@/components/link/empty";
import Profile_Details from "@/components/link/profile";
import Preview from "@/components/link/preview";
import Head from "next/head";
import Add_Link from "@/components/link/link_form";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Add_Link />
    </main>
  );
}
