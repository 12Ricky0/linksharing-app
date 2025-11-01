"use client";
import Image from "next/image";
import { useState, useActionState } from "react";
import Sortable_Item from "../dnd/sortable";
import { LinkProps, Colors } from "@/libs/definitions";
import { createLink } from "@/libs/action";

export default function Add_Link({ data }: { data: LinkProps[] }) {
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

  const [links, setLinks] = useState<LinkProps[]>(data ?? []);

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

  const [state, formAction, isPending] = useActionState(createLink, null);

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
        <section className="absolute max-h-[300px] left-[160px] overflow-y-auto top-[310px] flex flex-col">
          {links.map((link, index) => (
            <Sortable_Item
              key={index}
              link={link.url}
              index={index}
              id={index}
              color={Colors[link.platform as keyof typeof Colors]}
              name={link.platform}
            />
          ))}
        </section>
      </div>
      <form action={formAction} className="w-full ">
        <section className="bg-white max-h-[864px] overflow-y-auto flex-6/12 md:rounded-[8px]">
          <div className="m-4 p-6  rounded-[8px]">
            <article>
              <h1 className="font-bold text-2xl text-gray-900 mb-2">
                Customize your links
              </h1>
              <p className="font-normal text-[16px] text-gray-500">
                Add/edit/remove links below and then share all your profiles
                with the world!
              </p>

              <button
                onClick={addLink}
                className="border cursor-pointer hover:bg-gray-100 py-4 border-[#633CFF] w-full rounded-[8px] text-[16px] font-semibold text-[#633CFF] mt-[40px]"
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
                  Use the “Add new link” button to get started. Once you have
                  more than one link, you can reorder and edit them. We’re here
                  to help you share your profiles with everyone!{" "}
                </p>
              </article>
            )}
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
                      e.preventDefault();
                    }}
                    className="text-gray-500 text-[16px] cursor-pointer font-normal"
                  >
                    Remove
                  </button>
                </header>
                <h2 className=" font-normal text-[12px] text-gray-900">
                  Platform
                </h2>
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
                      <input
                        type="hidden"
                        name="platform"
                        id="platform"
                        value={link.platform}
                      />
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
                              : "text-gray-900 hover:text-[#633CFF]"
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
                    htmlFor={link.platform.toLowerCase()}
                    className=" font-normal text-[12px] text-gray-900"
                  >
                    Link
                  </label>
                  <div
                    className={`border ${
                      state?.errors[index]
                        ? "border-red-500"
                        : "border-gray-200"
                    } mt-2 w-full p-4 gap-4 group flex items-center rounded-[8px]`}
                  >
                    <Image
                      src="/assets/images/icon-link.svg"
                      height={32}
                      width={32}
                      alt="link"
                      className="w-auto h-auto"
                    />
                    <input
                      name="link"
                      id={link.platform.toLowerCase()}
                      placeholder={`e.g. https://www.${link.platform.toLowerCase()}.com/johnappleseed`}
                      className="flex-1 outline-none text-sm"
                      value={link.url}
                      onChange={(e) => {
                        const updated = [...links];
                        updated[index].url = e.target.value;
                        setLinks(updated);
                      }}
                    />
                    {state?.errors[index] && (
                      <div
                        key={link.platform}
                        className={`md:flex hidden  items-center justify-end gap-2  text-[12px] ${
                          state?.errors[index]
                            ? "text-red-500"
                            : "text-tetiary-semi-dark dark:text-secondary-light-gray"
                        } `}
                      >
                        <p>{state?.errors[index]}</p>
                      </div>
                    )}
                  </div>
                  {state?.errors[index] && (
                    <div
                      key={link.platform}
                      className={`flex md:hidden mb-4 mt-[6px]  items-center justify-end gap-2  text-[12px] ${
                        state?.errors[index]
                          ? "text-red-500"
                          : "text-tetiary-semi-dark dark:text-secondary-light-gray"
                      } `}
                    >
                      <p>{state?.errors[index]}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t  mt-6 pt-4 border-gray-400 flex justify-center md:justify-end">
            <button
              type="submit"
              className="bg-[#633CFF] hover:opacity-50 cursor-pointer m-4 rounded-[8px] py-4 text-[16px] font-semibold text-white w-full md:w-[85px]"
            >
              {isPending ? "Saving..." : "Save"}
            </button>
          </div>
        </section>
      </form>
    </section>
  );
}
