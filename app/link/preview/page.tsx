import Preview from "@/components/link/preview";
import getAllLinks from "@/libs/data";
import { getUser } from "@/libs/action";

export default async function Profile_Preview() {
  const req = await getAllLinks();
  const data = await req?.json();
  const user = await getUser(data[0]?.user);

  return (
    <main className="">
      <Preview name={user.name} data={data[0]} />
    </main>
  );
}
