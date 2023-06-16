'use client'

import { useState } from "react"
import Image from "next/image"
import { useFormContext } from "react-hook-form"

interface Props {
  name: string;
  label: string;
  type: string;
  holder: string;
  icon: JSX.Element;
  done?: boolean;
}

export const Input = ({ name, label, type, holder, icon, done }: Props) => {
  const [inputType, setInputType] = useState(type);
  const { register } = useFormContext()

  function showPassword() {
    inputType === "password" ? setInputType("text") : setInputType("password");
  }

  return (
    <>
      <label htmlFor={name} className="block mb-2 font-semibold">
        {label}
      </label>
      <div className="flex justify-between gap-x-3 py-4 md:py-3 px-4 border-2 border-gray-200 focus-within:border-primary bg-gray-50 rounded-xl items-center [&>svg]:focus-within:fill-primary focus-within:bg-white transition-all duration-200 w-full">
        {icon}
        <input
          {...register(name)}
          type={inputType}
          className="flex-1 w-32 text-lg font-medium bg-transparent outline-none"
          placeholder={holder}
        />
        <div className="flex items-center gap-3">
          {type === "password" && (
            <button
              className={`px-4 py-1 font-semibold border rounded-lg text-xs text-primary border-primary bg-primary bg-opacity-10 ${
                inputType !== "password" && "line-through"
              }`}
              type="button"
              onClick={showPassword}
            >
              Ver
            </button>
          )}
          {done && <Image src="/icons/check.svg" alt="done" width={24} height={24} />}
        </div>
      </div>
    </>
  );
};