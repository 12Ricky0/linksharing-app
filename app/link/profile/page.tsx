import Header from "@/components/link/header";
import Add_Link from "@/components/link/link_form";
import Profile_Details from "@/components/link/profile";
import getAllLinks from "@/libs/data";
export default async function Home() {
  const req = await getAllLinks();
  const data = await req?.json();
  return (
    <main className="">
      <Header />
      <Profile_Details />
      {/* <Add_Link data={data[0].urls} /> */}
    </main>
  );
}
