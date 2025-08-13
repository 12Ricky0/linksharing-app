"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, ChangeEvent, useActionState } from "react";
import { authenticateUser } from "@/libs/action";

export default function Login_Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [state, formAction, isPending] = useActionState(authenticateUser, null);

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
              Login
            </h1>
            <p className="font-normal text-[16px] text-gray-500">
              Add your details below to get back into the app
            </p>
          </article>

          <form className="md:w-[396px]" action={formAction}>
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
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  className={`w-full py-4 pr-4 pl-12 mt-2 border  rounded-[8px]  ${
                    state
                      ? "focus:outline-red-500 focus:border-red-500 border-red-500"
                      : "focus:outline-[#633CFF] focus:border-[#633CFF] border-gray-200"
                  } focus:outline-1 `}
                  placeholder="e.g. alex@email.com"
                  type="email"
                />
                {state && (
                  <div
                    className={`flex mb-4 mt-[6px] items-center justify-end gap-2  text-[12px] ${
                      state
                        ? "text-red-500"
                        : "text-tetiary-semi-dark dark:text-secondary-light-gray"
                    } `}
                  >
                    <p>{state}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="font-normal text-[12px] mt-6 text-gray-900">
              <label htmlFor="">Password</label>
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
                    state
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
              </div>
            </div>
            <button
              aria-disabled={isPending}
              className="bg-[#633CFF] cursor-pointer w-full font-semibold text-[16px] text-white my-6 rounded-[8px] py-4"
              type="submit"
            >
              {isPending ? "Loading..." : "Login"}
            </button>
          </form>
          <div className="flex flex-col font-normal text-[16px] text-center">
            <span className="text-gray-500">Don’t have an account?</span>
            <Link href="/register" className="text-[#633CFF]">
              Create account
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
