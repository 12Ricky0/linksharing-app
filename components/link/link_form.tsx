"use client";
import Image from "next/image";
import { useState } from "react";

export default function Add_Link() {
  const platforms = [
    "GitHub",
    "Frontend-Mentor",
    "Twitter",
    "LinkedIn",
    "YouTube",
    "Facebook",
    "Twitch",
    "Devto",
    "Codewars",
    "Codepen",
    "freeCodeCamp",
    "GitLab",
    "Hashnode",
    "Stack-Overflow",
  ];

  const [links, setLinks] = useState([
    {
      platform: "GitHub",
      url: "",
      showList: false,
    },
  ]);

  const handlePlatformChange = (index: number, newPlatform: string) => {
    const updated = [...links];
    updated[index].platform = newPlatform;
    updated[index].showList = false;
    setLinks(updated);
    // console.log(index);
  };

  const toggleDropdown = (index: number) => {
    const updated = [...links];
    updated[index].showList = !updated[index].showList;
    setLinks(updated);
  };

  const addLink = () => {
    setLinks([...links, { platform: "GitHub", url: "", showList: false }]);
  };

  return (
    <section className=" lg:flex justify-between gap-6 md:m-6">
      <div className="hidden flex-2/5 lg:flex items-center px-[126px] relative max-h-[764px] bg-white rounded-[8px]">
        <Image
          src="/assets/images/illustration-phone-mockup.svg"
          height={32}
          width={507}
          alt="phone"
          className="w-auto h-auto "
        />
        {/* <div className="absolute bg-gray-950 w-[253px] t rounded-[8px] py-[14px]">
          {" "}
          <Image
            src="/assets/images/icon-github.svg"
            height={32}
            width={32}
            alt="down"
            className="w-auto h-auto"
          />
        </div> */}
      </div>
      <section className="bg-white flex-6/12 md:rounded-[8px]">
        <div className="m-4 p-6  rounded-[8px]">
          <article>
            <h1 className="font-bold text-2xl text-gray-900 mb-2">
              Customize your links
            </h1>
            <p className="font-normal text-[16px] text-gray-500">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>

            <button
              onClick={addLink}
              className="border cursor-pointer py-4 border-[#633CFF] w-full rounded-[8px] text-[16px] font-semibold text-[#633CFF] mt-[40px]"
            >
              + Add new link
            </button>
          </article>
          {links.length == 0 && (
            <article className="bg-gray-50 mt-6 px-6 py-8 md:flex flex-col justify-center items-center md:px-[96px] rounded-[8px]">
              <Image
                src="/assets/images/illustration-empty.svg"
                height={32}
                width={32}
                alt="logo"
                className="w-auto h-auto "
              />
              <h1 className="font-bold text-2xl my-6 text-gray-900">
                Let’s get you started
              </h1>
              <p className="font-normal text-[16px] text-gray-500">
                Use the “Add new link” button to get started. Once you have more
                than one link, you can reorder and edit them. We’re here to help
                you share your profiles with everyone!{" "}
              </p>
            </article>
          )}
          <form action="" className="w-full ">
            {links.map((link, index) => (
              <div
                key={index}
                className="mb-6 bg-gray-50 mt-6 px-6 py-8  justify-center md:justify-between items-center rounded-[8px]"
              >
                <header className="flex justify-between mb-4">
                  <div className="inline-flex gap-2  font-bold text-gray-500 text-[16px]">
                    <Image
                      src="/assets/images/icon-drag-and-drop.svg"
                      height={32}
                      width={32}
                      alt="dnd"
                      className="w-auto h-auto "
                    />
                    <span>Link #{index + 1}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      setLinks(links.filter((_, i) => i !== index));
                      //   console.log(index);
                      e.preventDefault();
                    }}
                    className="text-gray-500 text-[16px] cursor-pointer font-normal"
                  >
                    Remove
                  </button>
                </header>
                <label
                  htmlFor=""
                  className=" font-normal text-[12px] text-gray-900"
                >
                  Platform
                </label>
                <section className="relative mt-2">
                  <div
                    onClick={() => toggleDropdown(index)}
                    className="border p-4 cursor-pointer border-gray-200 flex justify-between items-center rounded-[8px]"
                  >
                    <div className="inline-flex gap-4">
                      <Image
                        src={`/assets/images/icon-${link.platform.toLowerCase()}.svg`}
                        height={32}
                        width={32}
                        alt={`${link.platform.toLowerCase()}-icon`}
                        className="w-auto h-auto"
                      />
                      <span>{link.platform}</span>
                    </div>
                    <Image
                      src="/assets/images/icon-chevron-down.svg"
                      height={32}
                      width={32}
                      alt="down"
                      className="w-auto h-auto"
                    />
                  </div>

                  {link.showList && (
                    <ul className="bg-white rounded-[8px] mt-2 border p-4 shadow-lg absolute w-full border-gray-200 max-h-60 overflow-y-auto transition-all duration-300 ease-in-out">
                      {platforms.map((platform, i) => (
                        <li
                          key={i}
                          onClick={() => handlePlatformChange(index, platform)}
                          className="border-b border-gray-200 flex gap-3 items-center last:border-0 py-4 list-none"
                        >
                          <Image
                            src={`/assets/images/icon-${platform.toLowerCase()}.svg`}
                            height={32}
                            width={32}
                            alt={`${platform}-icon`}
                            className="w-auto h-auto"
                          />
                          {platform}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>{" "}
                <div className="mt-4">
                  <label
                    htmlFor=""
                    className=" font-normal text-[12px] text-gray-900"
                  >
                    Link
                  </label>
                  {/* <div className="border mt-2 w-full p-4 cursor-pointer gap-4 border-gray-200 flex items-center rounded-[8px]">
                    <Image
                      src="/assets/images/icon-link.svg"
                      height={32}
                      width={32}
                      alt="link"
                      className="w-auto h-auto"
                    />
                    <span>GitHub</span>
                  </div> */}
                  <div className="border mt-2 w-full p-4 gap-4 border-gray-200 flex items-center rounded-[8px]">
                    <Image
                      src="/assets/images/icon-link.svg"
                      height={32}
                      width={32}
                      alt="link"
                      className="w-auto h-auto"
                    />
                    <input
                      type="text"
                      placeholder={`Enter your ${link.platform} URL`}
                      className="flex-1 outline-none text-sm"
                      value={link.url}
                      onChange={(e) => {
                        const updated = [...links];
                        updated[index].url = e.target.value;
                        setLinks(updated);
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </form>
        </div>
        <div className="border-t mt-6 pt-4 border-gray-400 flex justify-center md:justify-end">
          <button className="bg-[#633CFF] m-4 rounded-[8px] py-4 text-[16px] font-semibold text-white w-full md:w-[85px]">
            Save
          </button>
        </div>
      </section>
    </section>
  );
}
