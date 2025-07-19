import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white md:m-6 md:rounded-[8px] flex justify-between px-6 py-4">
      <Image
        src="/assets/images/logo-devlinks-small.svg"
        height={32}
        width={32}
        alt="logo"
        className="w-auto h-auto md:hidden"
      />
      <Image
        src="/assets/images/logo-devlinks-large.svg"
        height={32}
        width={32}
        alt="logo"
        className="w-auto h-auto hidden md:block cursor-pointer"
      />
      <div className="inline-flex md:gap-6">
        <div className="w-[68px] cursor-pointer md:w-auto md:gap-2 md:py-4 md:px-6 bg-gray-100 rounded-[8px] flex items-center justify-center ">
          <Image
            src="/assets/images/icon-link.svg"
            height={32}
            width={32}
            alt="link"
            className="w-auto h-auto"
          />
          <span className="font-semibold text-[16px] text-gray-500 hidden md:block">
            Links
          </span>
        </div>
        <div className="w-[68px] cursor-pointer md:w-auto md:gap-2 flex items-center justify-center ">
          <Image
            src="/assets/images/icon-profile-details-header.svg"
            height={32}
            width={32}
            alt="profile"
            className="w-auto h-auto"
          />
          <span className="font-semibold text-[16px] text-gray-500 hidden md:block">
            Profile Details
          </span>
        </div>
      </div>
      <div className="flex cursor-pointer items-center justify-center size-[52px] md:size-auto md:py-4 border-2 md:px-6 border-[#633CFF] rounded-[8px]">
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
      </div>
    </header>
  );
}
