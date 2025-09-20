"use client";
import Image from "next/image";
import { LinkProps, Colors } from "@/libs/definitions";
import Sortable_Item from "../dnd/sortable";
import { useState, useActionState, ChangeEvent, useEffect } from "react";
import { createProfile } from "@/libs/action";

export default function Profile_Details({
  data,
  email,
  name,
}: {
  data: LinkProps[];
  email: string;
  name: string;
}) {
  const [preview, setPreview] = useState<string | null>();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 4.5 * 1024 * 1024) {
      alert("File is too large! Max 4.5MB.");
      e.target.value = "";
      return;
    }

    // const url = URL.createObjectURL(file);
    // setPreview(url);
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setPreview(base64String);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setPreview(savedImage);
    }
  }, []);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const [state, formAction, isPending] = useActionState(createProfile, null);

  return (
    <div className=" lg:flex justify-between gap-6 md:m-6">
      <div className="hidden flex-2/5 lg:flex items-center px-[126px] relative max-h-[700px] bg-white rounded-[8px]">
        <Image
          src="/assets/images/illustration-phone-mockup.svg"
          height={32}
          width={307}
          alt="phone"
          className="w-[307px] shrink-0 h-auto "
        />
        <section className="absolute max-h-[300px] gap-[20px] left-[160px] overflow-y-auto top-[310px] flex flex-col">
          {data.map((link, index) => (
            <Sortable_Item
              key={index}
              link={link.url}
              index={index}
              id={index}
              color={Colors[link?.platform]}
              name={link.platform}
            />
          ))}
        </section>
      </div>
      <div className="bg-white w-full md:rounded-[8px]">
        <form action={formAction}>
          <section className="m-4 p-6  rounded-[8px]">
            <article>
              <h1 className="font-bold text-2xl text-gray-900 mb-2">
                Profile Details
              </h1>
              <p className="font-normal text-[16px] text-gray-500">
                Add your details to create a personal touch to your profile.{" "}
              </p>
            </article>
            <article className="bg-gray-50 mt-6 px-6 py-6 md:flex flex-row justify-between items-center md:px-[24px] rounded-[8px]">
              <h3 className="font-normal text-[16px] mb-4 md:mb-0 text-gray-500">
                Profile picture
              </h3>
              <div className="md:inline-flex items-center gap-6">
                <div className="bg-gray-100 mb-6 md:mb-0 rounded-[8px] size-[150px] flex justify-center items-center relative flex-col gap-2">
                  {preview ? (
                    <Image
                      src={preview}
                      alt="Uploaded Preview"
                      fill
                      className="rounded-[8px]"
                    />
                  ) : (
                    <div className="inline-flex justify-center flex-col items-center">
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
                  )}
                  <input
                    type="file"
                    name="dp"
                    id="dp"
                    accept="image/png, image/jpeg"
                    onChange={handleImageUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
                <p className="font-normal md:block hidden  text-[12px] text-gray-500">
                  Image must be below 1024x1024px.
                  <br /> Use PNG or JPG format.{" "}
                </p>
                <p className="font-normal md:hidden text-[12px] text-gray-500">
                  Image must be below 1024x1024px. Use PNG or JPG format.{" "}
                </p>
              </div>
            </article>
            <section className="bg-gray-50 mt-6 px-6 py-6 md:flex flex-col justify-center items-center md:px-[24px] rounded-[8px]">
              <div className="font-normal w-full text-[12px] text-gray-900">
                <div className="md:flex justify-between items-center md:w-full">
                  <label className="first_name" htmlFor="">
                    First Name*
                  </label>
                  <input
                    name="first_name"
                    className={`w-full md:w-[70%] py-4 pr-4 pl-4 my-2 border  rounded-[8px]  ${
                      state?.errors.fname
                        ? "focus:outline-red-500 focus:border-red-500 border-red-500"
                        : "focus:outline-[#633CFF] focus:border-[#633CFF] border-gray-200"
                    } focus:outline-1 `}
                    placeholder="e.g. John"
                    type="text"
                    id="first_name"
                    onChange={handleChange}
                    defaultValue={name.split(" ")[0]}
                  />
                  {state?.errors.fname && (
                    <div
                      className={`md:flex text-right md:absolute md:right-[100px] md:items-center md:justify-end gap-2  text-[12px] ${
                        state?.errors.fname
                          ? "text-red-500"
                          : "text-tetiary-semi-dark dark:text-secondary-light-gray"
                      } `}
                    >
                      <p>{state?.errors.fname}</p>
                    </div>
                  )}
                </div>

                <div className="md:flex justify-between mt-2 items-center md:w-full">
                  <label htmlFor="last_name">Last Name*</label>
                  <input
                    name="last_name"
                    className={`w-full md:w-[70%] py-4 pr-4 pl-4 my-2 border  rounded-[8px]  ${
                      state?.errors.lname
                        ? "focus:outline-red-500 focus:border-red-500 border-red-500"
                        : "focus:outline-[#633CFF] focus:border-[#633CFF] border-gray-200"
                    } focus:outline-1 `}
                    placeholder="e.g. Appleseed"
                    type="text"
                    id="last_name"
                    onChange={handleChange}
                    defaultValue={name.split(" ")[1]}
                  />
                  {state?.errors.lname && (
                    <div
                      className={`md:flex text-right md:absolute md:right-[100px] md:items-center md:justify-start gap-2  text-[12px] ${
                        state?.errors.lname
                          ? "text-red-500"
                          : "text-tetiary-semi-dark dark:text-secondary-light-gray"
                      } `}
                    >
                      <p>{state?.errors.lname}</p>
                    </div>
                  )}
                </div>
                <div className="md:flex justify-between mt-2 items-center md:w-full">
                  <label htmlFor="email">Email</label>

                  <input
                    className={`w-full md:w-[70%] py-4 pr-4 pl-4 my-2 border  rounded-[8px]  ${
                      state?.errors.email
                        ? "focus:outline-red-500 focus:border-red-500 border-red-500"
                        : "focus:outline-[#633CFF] focus:border-[#633CFF] border-gray-200"
                    } focus:outline-1 `}
                    placeholder="e.g. alex@email.com"
                    type="email"
                    name="email"
                    id="email"
                    readOnly
                    defaultValue={email}
                  />
                </div>
              </div>
            </section>
          </section>
          <div className="border-t mt-6 pt-4 border-gray-400 flex justify-center md:justify-end">
            <button
              onClick={() => localStorage.setItem("profileImage", preview!)}
              type="submit"
              className="bg-[#633CFF] cursor-pointer m-4 rounded-[8px] py-4 text-[16px] font-semibold text-white w-full md:w-[85px]"
            >
              {isPending ? <p className="animate-pulse">Saving...</p> : " Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
