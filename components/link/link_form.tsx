"use client";
import Image from "next/image";
import { platform } from "os";
import { useState } from "react";

export default function Add_Link() {
  const [showList, setShowList] = useState(false);
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
  return (
    <form
      action=""
      className="bg-gray-50 mt-6 px-6 py-8 md:flex flex-col justify-center items-center md:px-[96px] rounded-[8px]"
    >
      <header className="flex justify-between">
        <div className="inline-flex gap-2 font-bold text-gray-500 text-[16px]">
          <Image
            src="/assets/images/icon-drag-and-drop.svg"
            height={32}
            width={32}
            alt="dnd"
            className="w-auto h-auto "
          />
          <span>Link #1</span>
        </div>
        <button className="text-gray-500 text-[16px] font-normal">
          Remove
        </button>
      </header>
      <label htmlFor="">Platform</label>
      <section className="relative">
        <div
          onClick={() => setShowList(!showList)}
          className="border p-4 cursor-pointer border-gray-200 flex justify-between items-center rounded-[8px]"
        >
          <div className="inline-flex gap-4">
            <Image
              src="/assets/images/icon-github.svg"
              height={32}
              width={32}
              alt="github-image"
              className="w-auto h-auto"
            />
            <span>GitHub</span>
          </div>
          <Image
            src="/assets/images/icon-chevron-down.svg"
            height={32}
            width={32}
            alt="down"
            className="w-auto h-auto"
          />
        </div>

        {showList && (
          <ul className="bg-white rounded-[8px] absolute w-full overflow-y-auto fixed mt-2 border p-4 shadow-lg border-gray-200">
            {platforms.map((platform, index) => (
              <li
                key={index}
                className="border-b border-gray-200 flex gap-3 items-center last:border-0 py-4 list-none"
              >
                <Image
                  src={`/assets/images/icon-${platform.toLowerCase()}.svg`}
                  height={32}
                  width={32}
                  alt={`${platform} icon`}
                  className="w-auto h-auto"
                />
                {platform}
              </li>
            ))}
          </ul>
        )}
      </section>{" "}
    </form>
  );
}
