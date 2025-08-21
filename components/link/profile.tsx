"use client";
import Image from "next/image";
import { LinkProps } from "@/libs/definitions";
import Sortable_Item from "../dnd/sortable";
import { useState } from "react";

export default function Profile_Details({ data }: { data: LinkProps[] }) {
  const colors = {
    GitHub: "#1A1A1A",
    "Frontend-Mentor": "#D9D9D9",
    Twitter: "#43B7E9",
    LinkedIn: "#2D68FF",
    YouTube: "#EE3939",
    Facebook: "#2442AC",
    Twitch: "#EE3FC8",
    Devto: "#333333",
    Codewars: "#8A1A50",
    Codepen: "#8A1A50",
    freeCodeCamp: "#302267",
    GitLab: "#EB4925",
    Hashnode: "#0330D1",
    "Stack-Overflow": "#EC7100",
  };

  const [preview, setPreview] = useState<string | null>(null);
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  return (
    <div className=" lg:flex justify-between gap-6 md:m-6">
      <div className="hidden flex-2/5 lg:flex items-center px-[126px] relative max-h-[700px] bg-white rounded-[8px]">
        <Image
          src="/assets/images/illustration-phone-mockup.svg"
          height={32}
          width={307}
          alt="phone"
          className="w-[307px] shrink-0 h-auto "
        />
        <section className="absolute max-h-[300px] gap-[20px] left-[160px] overflow-y-auto top-[310px] flex flex-col">
          {data.map((link, index) => (
            <Sortable_Item
              key={index}
              index={index}
              id={index}
              color={colors[link?.platform]}
              name={link.platform}
            />
          ))}
        </section>
      </div>
      <div className="bg-white w-full md:rounded-[8px]">
        <section className="m-4 p-6  rounded-[8px]">
          <article>
            <h1 className="font-bold text-2xl text-gray-900 mb-2">
              Profile Details
            </h1>
            <p className="font-normal text-[16px] text-gray-500">
              Add your details to create a personal touch to your profile.{" "}
            </p>
          </article>

          <article className="bg-gray-50 mt-6 px-6 py-6 md:flex flex-row justify-between items-center md:px-[24px] rounded-[8px]">
            <h3 className="font-normal text-[16px] mb-4 md:mb-0 text-gray-500">
              Profile picture
            </h3>
            <div className="md:inline-flex items-center gap-6">
              <div className="bg-gray-100 mb-6 md:mb-0 rounded-[8px] size-[150px] flex justify-center items-center relative flex-col gap-2">
                {preview ? (
                  <Image
                    src={preview}
                    alt="Uploaded Preview"
                    fill
                    className="rounded-[8px]"
                  />
                ) : (
                  <div className="inline-flex justify-center flex-col items-center">
                    <Image
                      src="/assets/images/icon-upload-image.svg"
                      height={32}
                      width={32}
                      alt="upload"
                      className="w-auto h-auto "
                    />
                    <h1 className="text-[16px] font-semibold text-[#633CFF]">
                      + Upload Image
                    </h1>
                    <input
                      type="file"
                      accept="image/png, image/jpeg"
                      onChange={handleImageUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>
                )}
              </div>
              <p className="font-normal md:block hidden  text-[12px] text-gray-500">
                Image must be below 1024x1024px.
                <br /> Use PNG or JPG format.{" "}
              </p>
              <p className="font-normal md:hidden text-[12px] text-gray-500">
                Image must be below 1024x1024px. Use PNG or JPG format.{" "}
              </p>
            </div>
          </article>
          <form className="bg-gray-50 mt-6 px-6 py-6 md:flex flex-col justify-center items-center md:px-[24px] rounded-[8px]">
            <div className="font-normal w-full text-[12px] text-gray-900">
              <div className="md:flex justify-between items-center md:w-full">
                <label className="" htmlFor="">
                  First Name*
                </label>
                <input
                  className="w-full md:w-[70%] py-4 pr-4 pl-12 my-2 border border-gray-200 rounded-[8px]"
                  placeholder=""
                  type="text"
                />
              </div>
              <div className="md:flex justify-between items-center md:w-full">
                <label htmlFor="">Last Name*</label>
                <input
                  className="w-full md:w-[70%] py-4 pr-4 pl-12 my-2 border border-gray-200 rounded-[8px]"
                  placeholder=""
                  type="text"
                />
              </div>
              <div className="md:flex justify-between items-center md:w-full">
                <label htmlFor="">Email</label>
                <div className="relative md:w-[70%]">
                  <Image
                    src="/assets/images/icon-email.svg"
                    height={16}
                    width={16}
                    alt="email"
                    className="w-auto h-auto absolute left-4 top-[26px]"
                  />

                  <input
                    className="w-full py-4 pr-4 pl-12 mt-2 border border-gray-200 rounded-[8px]"
                    placeholder="e.g. alex@email.com"
                    type="email"
                  />
                </div>
              </div>
            </div>
          </form>
        </section>
        <div className="border-t mt-6 pt-4 border-gray-400 flex justify-center md:justify-end">
          <button className="bg-[#633CFF] m-4 rounded-[8px] py-4 text-[16px] font-semibold text-white w-full md:w-[85px]">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
