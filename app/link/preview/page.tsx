import Preview from "@/components/link/preview";
import getAllLinks from "@/libs/data";

export default async function Profile_Preview() {
  const req = await getAllLinks();
  const data = await req?.json();

  return (
    <main className="">
      <Preview data={data[0]} />
    </main>
  );
}
