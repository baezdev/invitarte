import Image from "next/image";

interface Props {
  onClick: any;
  arrowDirection: "left" | "right";
}

export const ArrowButton = ({ onClick, arrowDirection }: Props) => {
  return (
    <button
      className="inline-block p-3 transition duration-300 ease-in-out bg-primary rounded-3xl hover:scale-110"
      onClick={onClick}
    >
      <Image
        src={`/icons/${arrowDirection}.svg`}
        alt="flecha"
        width={32}
        height={32}
        className="w-8 h-8 invert"
      />
    </button>
  )
}