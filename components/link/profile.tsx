import Image from "next/image";

export default function Profile_Details() {
  return (
    <div className=" lg:flex justify-between gap-6 md:m-6">
      <section className="hidden lg:flex items-center px-[126px] bg-white rounded-[8px]">
        <Image
          src="/assets/images/illustration-phone-mockup.svg"
          height={32}
          width={507}
          alt="phone"
          className=" h-auto "
        />
      </section>
      <div className="bg-white md:rounded-[8px]">
        <section className="m-4 p-6  rounded-[8px]">
          <article>
            <h1 className="font-bold text-2xl text-gray-900 mb-2">
              Profile Details
            </h1>
            <p className="font-normal text-[16px] text-gray-500">
              Add your details to create a personal touch to your profile.{" "}
            </p>
          </article>

          <article className="bg-gray-50 mt-6 px-6 py-6 md:flex flex-col justify-center items-center md:px-[96px] rounded-[8px]">
            <h3 className="font-normal text-[16px] mb-4 text-gray-500">
              Profile picture
            </h3>
            <div className="bg-gray-100 mb-6 rounded-[8px] size-[150px] flex justify-center items-center flex-col gap-2">
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
            </div>
            <p className="font-normal text-[12px] text-gray-500">
              Image must be below 1024x1024px. Use PNG or JPG format.{" "}
            </p>
          </article>
          <form className="bg-gray-50 mt-6 px-6 py-6 md:flex flex-col justify-center items-center md:px-[96px] rounded-[8px]">
            <div className="font-normal text-[12px] text-gray-900">
              <label htmlFor="">First Name</label>
              <input
                className="w-full py-4 pr-4 pl-12 my-2 border border-gray-200 rounded-[8px]"
                placeholder=""
                type="text"
              />
              <label htmlFor="">Last Name</label>
              <input
                className="w-full py-4 pr-4 pl-12 my-2 border border-gray-200 rounded-[8px]"
                placeholder=""
                type="text"
              />

              <label htmlFor="">Email</label>
              <div className="relative">
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
