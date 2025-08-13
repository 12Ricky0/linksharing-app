"use client";
import Image from "next/image";
import { useState } from "react";
import Sortable_Item from "../dnd/sortable";
import { LinkProps } from "@/libs/definitions";

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

  const [links, setLinks] = useState<LinkProps[]>([
    // {
    //   platform: "",
    //   url: "",
    //   showList: false,
    // },
  ]);

  const handlePlatformChange = (index: number, newPlatform: string) => {
    const updated = [...links];
    updated[index].platform = newPlatform;
    updated[index].showList = false;
    setLinks(updated);
  };

  const toggleDropdown = (index: number) => {
    const updated = [...links];
    updated[index].showList = !updated[index].showList;
    setLinks(updated);
  };

  const selectedLinks = links.map((link) => link.platform);
  const unselectedLinks = platforms.filter(
    (platform) => !selectedLinks.includes(platform)
  );

  const getRandomUnselectedPlatform = () => {
    if (unselectedLinks.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * unselectedLinks.length);
    return unselectedLinks[randomIndex];
  };

  const addLink = () => {
    const nextPlatform = getRandomUnselectedPlatform() || "GitHub";
    setLinks([...links, { platform: nextPlatform, url: "", showList: false }]);
  };

  return (
    <section className=" lg:flex justify-between  gap-6 md:m-6">
      <div className="hidden flex-2/5 lg:flex items-center px-[126px] relative max-h-[700px] bg-white rounded-[8px]">
        <Image
          src="/assets/images/illustration-phone-mockup.svg"
          height={32}
          width={307}
          alt="phone"
          className="w-[307px] shrink-0 h-auto "
        />
        <section className="absolute max-h-[300px] gap-[20px] left-[160px] overflow-y-auto top-[310px] flex flex-col">
          {links.map((link, index) => (
            <Sortable_Item
              key={index}
              index={index}
              id={index}
              color={colors[link.platform]}
              name={link.platform}
            />
          ))}
        </section>
      </div>
      <section className="bg-white max-h-[864px] overflow-y-auto flex-6/12 md:rounded-[8px]">
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
                    <ul className="bg-white rounded-[8px] mt-2 border cursor-pointer p-4 shadow-lg absolute w-full border-gray-200 max-h-60 overflow-y-auto transition-all duration-300 ease-in-out">
                      {platforms.map((platform, i) => (
                        <li
                          key={i}
                          onClick={() => {
                            if (selectedLinks.includes(platform)) return;
                            handlePlatformChange(index, platform);
                          }}
                          className={`border-b ${
                            selectedLinks.includes(platform)
                              ? "text-gray-400"
                              : "text-gray-900"
                          } border-gray-200 flex gap-3 items-center last:border-0 py-4 list-none`}
                        >
                          <Image
                            src={`/assets/images/icon-${platform.toLowerCase()}.svg`}
                            height={32}
                            width={32}
                            alt={`${platform}-icon`}
                            className="w-auto h-auto"
                            style={{
                              filter: `${
                                selectedLinks.includes(platform) &&
                                "invert(10%) brightness(200%)"
                              }  `,
                            }}
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
        <div className="border-t  mt-6 pt-4 border-gray-400 flex justify-center md:justify-end">
          <button className="bg-[#633CFF] m-4 rounded-[8px] py-4 text-[16px] font-semibold text-white w-full md:w-[85px]">
            Save
          </button>
        </div>
      </section>
    </section>
  );
}
