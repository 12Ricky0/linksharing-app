import Image from "next/image";

export default function Preview() {
  return (
    <section className="md:relative">
      <div className="h-[357px] hidden rounded-b-[12px] md:block bg-[#633CFF] " />
      <div className="md:absolute top-0 md:w-full">
        <header className="mx-4 my-4 md:bg-white md:rounded-[8px] md:px-6 md:py-4 flex justify-between">
          <button className="text-[#633CFF] font-semibold text-[16px] border border-[#633CFF] py-4 w-[160px] rounded-[8px]">
            Back to Editor
          </button>
          <button className="bg-[#633CFF] font-semibold text-[16px] text-white py-4 w-[160px] rounded-[8px]">
            Share Link
          </button>
        </header>
        <article className="mt-[50px] mx-auto px-[56px] py-12 md:rounded-[8px] md:bg-white md:w-[350px]">
          <div className="size-[104px] rounded-full border-4 mx-auto  border-[#633CFF]">
            {/* <Image
            src="/assets/images/icon-upload-image.svg"
            height={32}
            width={32}
            alt="profile-image"
            className="w-auto h-auto "
          /> */}
          </div>
          <h1 className="text-[32px] mt-6 font-bold text-center text-gray-900">
            Ben Wright
          </h1>
          <p className="text-[16px] font-normal mt-2 text-center text-gray-500">
            ben@example.com
          </p>
          <div className="mt-14 flex flex-col gap-6">
            <div className="bg-gray-950 p-4 flex justify-between items-center rounded-[8px]">
              <div className="inline-flex gap-2 items-center">
                <Image
                  src="/assets/images/icon-github.svg"
                  height={32}
                  width={32}
                  alt="github-image"
                  className="w-auto h-auto "
                />
                <span className="text-[16px] font-normal text-white">
                  GitHub
                </span>
              </div>
              <Image
                src="/assets/images/icon-arrow-right.svg"
                height={32}
                width={32}
                alt="arrow-right"
                className="w-auto h-auto "
              />
            </div>
            <div className="bg-red-500 p-4 flex justify-between items-center rounded-[8px]">
              <div className="inline-flex gap-2 items-center">
                <Image
                  src="/assets/images/icon-youtube.svg"
                  height={32}
                  width={32}
                  alt="github-image"
                  className="w-auto h-auto "
                />
                <span className="text-[16px] font-normal text-white">
                  YouTube
                </span>
              </div>
              <Image
                src="/assets/images/icon-arrow-right.svg"
                height={32}
                width={32}
                alt="arrow-right"
                className="w-auto h-auto "
              />
            </div>
            <div className="bg-blue-500 p-4 flex justify-between items-center rounded-[8px]">
              <div className="inline-flex gap-2 items-center">
                <Image
                  src="/assets/images/icon-linkedin.svg"
                  height={32}
                  width={32}
                  alt="github-image"
                  className="w-auto h-auto "
                />
                <span className="text-[16px] font-normal text-white">
                  LinkedIn
                </span>
              </div>
              <Image
                src="/assets/images/icon-arrow-right.svg"
                height={32}
                width={32}
                alt="arrow-right"
                className="w-auto h-auto "
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
