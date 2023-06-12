import { twMerge } from "tailwind-merge";
import { Container } from "../ui/Container"
import { Title } from "../ui/Title"
import plan1 from "/images/plan1.svg"
import plan2 from "/images/plan2.svg"
import Image from "next/image";

interface PlanProps {
  href: string;
  img: string;
  title: string;
  icon: string;
  description: string;
  price: string;
  color: "pink" | "purple";
}

const plans: Array<PlanProps> = [
  {
    href: "#",
    img: "plan1",
    title: "Basico",
    icon: "basico",
    description: "Escoge de entre un conjunto de plantillas prediseñadas",
    price: "Gratis",
    color: "pink",
  },
  {
    href: "#",
    img: "plan2",
    title: "Premium",
    icon: "premium",
    description: "Ponte en contacto para obtener una invitación personalizada",
    price: "$500.00 MXN",
    color: "purple",
  },
]


export const Plans = () => {
  return (
    <section className="mb-24" id="plans">
      <Container>
        <Title>
          nuestros planes
        </Title>
        <div className="flex flex-col justify-center gap-10 md:flex-row">
          {plans.map(plan => (
            <Plan
              key={plan.title}
              {...plan}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

const Plan: React.FC<PlanProps> = ({ href, img, title, icon, description, price, color }) => {
  const colors = {
    pink: "third",
    purple: "primary",
  }

  return (
    <a
      href={href}
      className={twMerge(`block w-full md:w-[425px] border-4 rounded-3xl hover:scale-105 transition-all duration-200 ease-in-out group`, `${color === "pink" ? "hover:border-third" : "hover:border-primary"}`) }
    >
      <Image src={`/images/${img}.svg`} alt={title} className="w-full mx-6 grayscale group-hover:grayscale-0" width={100} height={100} />
      <p
        className="flex items-center justify-center gap-2 text-4xl font-bold text-center capitalize"
      >
        {title}
        <span><Image src={`/icons/${icon}.svg`} alt={icon} width={30} height={30} /></span>
      </p>
      <p className="px-10 mt-5 text-center">
        {description}
      </p>
      <div className="h-[2.5px] bg-gray-300 w-28 my-5 mx-auto rounded"></div>
      <p className="text-2xl font-semibold text-center capitalize">{price}</p>
      <div
        className={twMerge(`py-3 bg-primary mt-5 rounded-b-2xl opacity-0 group-hover:opacity-100`, `${color === "pink" ? "group-hover:bg-third" : "group-hover:bg-primary"}`)}
        id="loquiero"
      >
        <p className="text-lg font-medium text-center text-white">Lo necesito!</p>
      </div>
    </a>
  )
}