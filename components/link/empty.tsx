import Image from "next/image";
import Link from "next/link";

export default function Empty() {
  return (
    <div className=" lg:flex justify-between gap-6 md:m-6">
      <section className="hidden lg:flex items-center px-[126px] bg-white rounded-[8px]">
        <Image
          src="/assets/images/illustration-phone-mockup.svg"
          height={32}
          width={32}
          alt="phone"
          className="w-auto h-auto "
        />
      </section>
      <div className="bg-white md rounded-[8px]">
        <section className="m-4 p-6  rounded-[8px]">
          <article>
            <h1 className="font-bold text-2xl text-gray-900 mb-2">
              Customize your links
            </h1>
            <p className="font-normal text-[16px] text-gray-500">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>

            <button className="border cursor-pointer py-4 border-[#633CFF] w-full rounded-[8px] text-[16px] font-semibold text-[#633CFF] mt-[40px]">
              + Add new link
            </button>
          </article>

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
