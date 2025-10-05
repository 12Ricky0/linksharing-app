"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { UserUrlsProps, Colors } from "@/libs/definitions";
import { useEffect, useState } from "react";

export default function Preview({
  data,
  name,
}: {
  data: UserUrlsProps;
  name: string;
}) {
  const router = useRouter();
  // const savedImage = localStorage.getItem("profileImage");
  const [url, setUrl] = useState("/assets/images/icon-upload-image.svg");

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setUrl(savedImage);
    }
  }, []);

  return (
    <section className="md:relative">
      <div className="h-[357px] hidden rounded-b-[12px] md:block bg-[#633CFF] " />
      <div className="md:absolute top-0 md:w-full">
        <header className="mx-4 my-4 md:bg-white md:rounded-[8px] md:px-6 md:py-4 flex justify-between">
          <button
            onClick={() => router.back()}
            className="text-[#633CFF] font-semibold cursor-pointer text-[16px] border border-[#633CFF] py-4 w-[160px] rounded-[8px]"
          >
            Back to Editor
          </button>
          <button className="bg-[#633CFF] font-semibold text-[16px] text-white py-4 w-[160px] rounded-[8px]">
            Share Link
          </button>
        </header>
        <article className="mt-[50px] mx-auto px-[56px] py-12 md:rounded-[8px] md:bg-white md:w-[350px]">
          <div className="size-[104px] flex relative justify-center  rounded-full border-4 mx-auto  border-[#633CFF]">
            <Image
              src={url!}
              height={104}
              width={104}
              alt="profile-image"
              className="  rounded-full "
            />
          </div>
          <h1 className="text-[32px] mt-6 font-bold text-center text-gray-900">
            {name}
          </h1>
          <p className="text-[16px] font-normal mt-2 text-center text-gray-500">
            {data.user}
          </p>
          <div className="mt-14 flex flex-col gap-6">
            {data.urls.map((link) => (
              <Link
                href={link.url}
                target="_blank"
                key={link._id}
                className=" p-4 flex justify-between items-center rounded-[8px]"
                style={{
                  backgroundColor: Colors[link.platform as keyof typeof Colors],
                }}
              >
                <div className="inline-flex gap-2 items-center">
                  <Image
                    src={`/assets/images/icon-${link.platform.toLowerCase()}.svg`}
                    height={32}
                    width={32}
                    alt="github-image"
                    className="w-auto h-auto "
                    style={{ filter: "invert(100%) brightness(200%)" }}
                  />
                  <span className="text-[16px] font-normal text-white">
                    {link.platform}
                  </span>
                </div>
                <Image
                  src="/assets/images/icon-arrow-right.svg"
                  height={32}
                  width={32}
                  alt="arrow-right"
                  className="w-auto h-auto "
                />
              </Link>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
