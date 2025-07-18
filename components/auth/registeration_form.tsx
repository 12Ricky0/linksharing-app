import Image from "next/image";
import Link from "next/link";

export default function Register_Form() {
  return (
    <section>
      <section className="md:flex flex-col h-screen justify-center items-center">
        <Image
          src="/assets/images/logo-devlinks-large.svg"
          height={40}
          width={182}
          alt="logo"
          className="w-auto h-auto"
        />
        <div className="md:bg-white md:p-[40px] md:mt-12 md:rounded-[8px]">
          <article className="mt-16 md:mt-0 mb-[40px]">
            <h1 className="font-bold text-2xl md:text-[32px] text-gray-900 mb-2">
              Create account
            </h1>
            <p className="font-normal text-[16px] text-gray-500">
              Let’s get you started sharing your links!
            </p>
          </article>

          <form className="md:w-[396px]" action="">
            <div className="font-normal text-[12px] text-gray-900">
              <label htmlFor="">Email address</label>
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
            <div className="font-normal text-[12px] mt-6 text-gray-900">
              <label htmlFor="">Create password</label>
              <div className="relative">
                <Image
                  src="/assets/images/icon-password.svg"
                  height={16}
                  width={16}
                  alt="lock"
                  className="w-auto h-auto absolute left-4 top-[26px]"
                />

                <input
                  className="w-full py-4 pr-4 pl-12 mt-2 border border-gray-200 rounded-[8px]"
                  placeholder="At least 8 characters"
                  type="password"
                />
              </div>
            </div>
            <div className="font-normal text-[12px] mt-6 text-gray-900">
              <label htmlFor="">Confirm password</label>
              <div className="relative mb-2">
                <Image
                  src="/assets/images/icon-password.svg"
                  height={16}
                  width={16}
                  alt="lock"
                  className="w-auto h-auto absolute left-4 top-[26px]"
                />

                <input
                  className="w-full py-4 pr-4 pl-12 mt-2 border border-gray-200 rounded-[8px]"
                  placeholder="At least 8 characters"
                  type="password"
                />
              </div>
              <span className="text-gray-500 font-normal text-[12px]">
                Password must contain at least 8 characters
              </span>
            </div>
            <button
              className="bg-[#633CFF] cursor-pointer w-full font-semibold text-[16px] text-white my-6 rounded-[8px] py-4"
              type="submit"
            >
              Create new account
            </button>
          </form>
          <div className="flex flex-col md:flex-row md:justify-center font-normal text-[16px] text-center">
            <span className="text-gray-500">
              Already have an account? {` `}
            </span>
            <Link href="/" className="text-[#633CFF]">
              Login
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
