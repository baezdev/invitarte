interface TitleProps {
  children: string;
  textColor?: "black" | "white";
}

export const Title: React.FC<TitleProps> = ({ children, textColor }) => {
  return (
    <h3
      className={`mx-auto pb-2 relative w-fit text-2xl md:text-4xl font-semibold text-center capitalize mb-14 before:content-[''] before:h-1 before:w-24 md:before:w-40 before:bg-pink-500 before:absolute before:bottom-0 before:right-0 before:rounded text-${textColor}`}
    >
      {children}
    </h3>
  )
}