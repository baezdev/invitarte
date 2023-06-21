'use client'

import { useState } from "react"
import Image from "next/image"
import { ErrorMessage, Field, useField } from "formik"
import { twMerge } from "tailwind-merge";

interface InputProps {
  name: string;
  label: string;
  type: string;
  holder: string;
  icon: JSX.Element;
  done?: boolean;
}

export const Input = ({ ...props }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const [_, meta] = useField(props)


  const { name, label, type, holder, icon } = props

  const switchShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div>
      <label htmlFor={name} className="block mb-2 font-semibold">
        {label}
      </label>
      <div className={twMerge(`flex justify-between gap-x-3 py-4 md:py-3 px-4 border-2 bg-gray-50 rounded-xl items-center focus-within:bg-white transition-all duration-200 w-full focus-within:border-primary [&>svg]:focus-within:fill-primary`, `${meta.error && meta.touched ? 'border-red-500 [&>svg]:fill-red-500' : 'border-gray-200'}`) }>
        {icon}
        <Field
          {...props}
          name={name}
          type={showPassword ? 'text' : type}
          placeholder={holder}
          className="flex-1 w-32 text-lg font-medium bg-transparent outline-none"
        />
        <div className="flex items-center gap-3">
          {type === "password" && (
            <button
              className={`px-4 py-1 font-semibold border rounded-lg text-xs text-primary border-primary bg-primary bg-opacity-10 ${
                showPassword && "line-through"
              }`}
              type="button"
              onClick={switchShowPassword}
            >
              Ver
            </button>
          )}
          {!meta.error && meta.touched && 
            <Image src="/icons/check.svg" alt="done" width={24} height={24} />
          }
        </div>
      </div>
      <ErrorMessage name={name}>
        {(error: string) => (
          <span 
            className='block mt-1 font-semibold text-red-500'
          >
            {error}
          </span>
        )}
      </ErrorMessage>
    </div>
  );
};