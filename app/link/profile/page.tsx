import Header from "@/components/link/header";
import Profile_Details from "@/components/link/profile";
import getAllLinks from "@/libs/data";
export default async function Home() {
  const req = await getAllLinks();
  const data = await req?.json();
  console.log(data[0].urls);
  return (
    <main className="">
      <Header />
      <Profile_Details data={data[0].urls} />
    </main>
  );
}
