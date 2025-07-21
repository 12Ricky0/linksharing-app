import Login_Form from "@/components/auth/login_form";
import Register_Form from "@/components/auth/registeration_form";
import Header from "@/components/link/header";
import Empty from "@/components/link/empty";
import Profile_Details from "@/components/link/profile";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Profile_Details />
    </main>
  );
}
