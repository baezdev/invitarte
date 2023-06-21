interface Props {
  children: string | React.ReactNode
  type?: 'button' | 'submit'
}

export const Button = ({ children, type = 'button' }: Props) => {
  return (
    <button 
      className="bg-primary w-full leading-none inline-block font-semibold text-white px-6 py-[23px] md:py-4 rounded-3xl transition ease-in-out hover:scale-105 duration-300"
      type={type}
    >
      {children}
    </button>
  )
}