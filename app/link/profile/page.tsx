import Header from "@/components/link/header";
import Profile_Details from "@/components/link/profile";
import getAllLinks from "@/libs/data";
import { auth } from "@/auth";
import { getUser } from "@/libs/action";

export default async function Home() {
  const req = await getAllLinks();
  const data = await req?.json();

  const session = await auth();
  const user = session?.user?.email;
  const currentUser = await getUser(user!);
  console.log(currentUser);

  return (
    <main className="">
      <Header />
      <Profile_Details
        picture={currentUser.image}
        name={currentUser.name}
        email={user!}
        data={data[0].urls}
      />
    </main>
  );
}
