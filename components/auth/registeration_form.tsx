"use client";
import Image from "next/image";
import Link from "next/link";
import { registerUser } from "@/libs/action";
import { useActionState, useState, ChangeEvent } from "react";

export default function Register_Form() {
  const [state, formAction, isPending] = useActionState(registerUser, null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeat: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section>
      <section className="md:flex flex-col h-screen p-8 md:p-0 justify-center items-center">
        <Image
          src="/assets/images/logo-devlinks-large.svg"
          height={40}
          width={182}
          alt="logo"
          className="w-auto h-auto"
        />
        <div className="md:bg-white md:p-[40px]  md:mt-12 md:rounded-[8px]">
          <article className="mt-16 md:mt-0 mb-[40px]">
            <h1 className="font-bold text-2xl md:text-[32px] text-gray-900 mb-2">
              Create account
            </h1>
            <p className="font-normal text-[16px] text-gray-500">
              Let’s get you started sharing your links!
            </p>
          </article>

          <form className="md:w-[396px]" action={formAction}>
            <div className="font-normal text-[12px] text-gray-900">
              <label htmlFor="email">Email address</label>
              <div className="relative">
                <Image
                  src="/assets/images/icon-email.svg"
                  height={16}
                  width={16}
                  alt="email"
                  className="w-auto h-auto absolute left-4 top-[26px]"
                />

                <input
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  className={`w-full py-4 pr-4 pl-12 mt-2 border  rounded-[8px]  ${
                    state?.errors?.email
                      ? "focus:outline-red-500 focus:border-red-500 border-red-500"
                      : "focus:outline-[#633CFF] focus:border-[#633CFF] border-gray-200"
                  } focus:outline-1 `}
                  placeholder="e.g. alex@email.com"
                  type="email"
                />
                {state?.errors?.email && (
                  <div
                    className={`flex mb-4 mt-[6px] items-center justify-end gap-2  text-[12px] ${
                      state?.errors.email
                        ? "text-red-500"
                        : "text-tetiary-semi-dark dark:text-secondary-light-gray"
                    } `}
                  >
                    <p>{state.errors.email}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="font-normal text-[12px] mt-6 text-gray-900">
              <label htmlFor="password">Create password</label>
              <div className="relative">
                <Image
                  src="/assets/images/icon-password.svg"
                  height={16}
                  width={16}
                  alt="lock"
                  className="w-auto h-auto absolute left-4 top-[26px]"
                />

                <input
                  className={`w-full py-4 pr-4 pl-12 mt-2 border  rounded-[8px]  ${
                    state?.errors?.password
                      ? "focus:outline-red-500 focus:border-red-500 border-red-500"
                      : "focus:outline-[#633CFF] focus:border-[#633CFF] border-gray-200"
                  } focus:outline-1 `}
                  placeholder="At least 8 characters"
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {state?.errors?.password && (
                  <div
                    className={`flex mb-4 mt-[6px] items-center justify-end gap-2  text-[12px] ${
                      state?.errors.password
                        ? "text-red-500"
                        : "text-tetiary-semi-dark dark:text-secondary-light-gray"
                    } `}
                  >
                    <p>{state.errors.password}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="font-normal text-[12px] mt-6 text-gray-900">
              <label htmlFor="repeat">Confirm password</label>
              <div className="relative mb-2">
                <Image
                  src="/assets/images/icon-password.svg"
                  height={16}
                  width={16}
                  alt="lock"
                  className="w-auto h-auto absolute left-4 top-[26px]"
                />

                <input
                  className={`w-full py-4 pr-4 pl-12 mt-2 border  rounded-[8px]  ${
                    state?.errors?.confirm_password
                      ? "focus:outline-red-500 focus:border-red-500 border-red-500"
                      : "focus:outline-[#633CFF] focus:border-[#633CFF] border-gray-200"
                  } focus:outline-1 `}
                  placeholder="At least 8 characters"
                  type="password"
                  name="repeat"
                  id="repeat"
                  value={formData.repeat}
                  onChange={handleChange}
                />
                {state?.errors?.confirm_password && (
                  <div
                    className={`flex mb-4 mt-[6px] items-center justify-end gap-2  text-[12px] ${
                      state?.errors.confirm_password
                        ? "text-red-500"
                        : "text-tetiary-semi-dark dark:text-secondary-light-gray"
                    } `}
                  >
                    <p>{state.errors.confirm_password}</p>
                  </div>
                )}
              </div>
              <span className="text-gray-500 font-normal text-[12px]">
                Password must contain at least 8 characters
              </span>
            </div>
            <button
              className="bg-[#633CFF] cursor-pointer w-full font-semibold text-[16px] text-white my-6 rounded-[8px] py-4"
              type="submit"
            >
              {isPending ? (
                <p className="animate-pulse">Creating...</p>
              ) : (
                "Create new account"
              )}
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
