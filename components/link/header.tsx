"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Header() {
  const path = usePathname();
  return (
    <header className="bg-white md:m-6 md:rounded-[8px] flex justify-between px-6 py-4">
      <Image
        src="/assets/images/logo-devlinks-small.svg"
        height={32}
        width={32}
        alt="logo"
        className="w-auto h-auto md:hidden"
        onClick={() => signOut()}
      />
      <Image
        src="/assets/images/logo-devlinks-large.svg"
        height={32}
        width={32}
        alt="logo"
        className="w-auto h-auto hidden md:block cursor-pointer"
        onClick={() => signOut()}
      />
      <div className="inline-flex md:gap-6">
        <Link
          href="/link/home"
          className={`w-[68px] cursor-pointer md:w-auto md:gap-2 md:py-4 md:px-6 ${
            path == "/link/home" && "bg-gray-100"
          }  rounded-[8px] flex items-center justify-center`}
        >
          <Image
            src="/assets/images/icon-link.svg"
            height={32}
            width={32}
            alt="link"
            className="w-auto h-auto"
          />
          <span
            className={`font-semibold text-[16px] ${
              path == "/link/home" ? "text-[#633CFF]" : "text-gray-500"
            }  hidden md:block`}
          >
            Links
          </span>
        </Link>
        <Link
          href="/link/profile"
          className={`w-[68px] cursor-pointer md:w-auto md:gap-2 md:py-4 md:px-6 ${
            path == "/link/profile" && "bg-gray-100"
          }  rounded-[8px] flex items-center justify-center`}
        >
          <Image
            src="/assets/images/icon-profile-details-header.svg"
            height={32}
            width={32}
            alt="profile"
            className="w-auto h-auto"
          />
          <span
            className={`font-semibold text-[16px] ${
              path == "/link/profile" ? "text-[#633CFF]" : "text-gray-500"
            }  hidden md:block`}
          >
            Profile Details
          </span>
        </Link>
      </div>
      <Link
        href="/link/preview"
        className="flex cursor-pointer items-center justify-center size-[52px] md:size-auto md:py-4 border-2 md:px-6 border-[#633CFF] rounded-[8px]"
      >
        <Image
          src="/assets/images/icon-preview-header.svg"
          height={32}
          width={32}
          alt="preview"
          className="w-auto h-auto md:hidden"
        />
        <span className="font-semibold text-[16px] text-[#633CFF] hidden md:block">
          Preview
        </span>
      </Link>
    </header>
  );
}
