interface Props {
  children: string | React.ReactNode
}

export const Button = ({ children }: Props) => {
  return (
    <button className="bg-primary w-full leading-none inline-block font-semibold text-white px-6 py-[23px] md:py-[14px] rounded-3xl transition ease-in-out hover:scale-105 duration-300">
      {children}
    </button>
  )
}