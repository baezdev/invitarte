import { useMemo } from "react"
import Image from "next/image"

import { Container } from "../ui/Container"
import { Title } from "../ui/Title"



export const Offers = () => {
  const offers = useMemo(() => [
    {
      title: "digital",
      description:
        "Accede a tus invitaciones desde cualquier dispositivo electrónico.",
      icon: "device",
    },
    {
      title: "diseño",
      description:
        "Crea tu propio diseño, envíanos tus ideas y nosotros nos encargamos de hacerlas realidad.",
      icon: "pencil",
    },
    {
      title: "ecológico",
      description:
        "Vive una nueva experiencia, cuidando nuestro planeta ¡Dile adiós al papel!",
      icon: "cloud",
    },
  ], [])

  return (
    <section className="my-32 mt-36" id="offer">
    <Container>
      <Title>
        La mejor opción para ti.
      </Title>
      <div className="flex flex-col justify-center grid-cols-3 gap-10 md:grid">
        {offers.map((offer) => (
          <OfferCard key={offer.title}
            title={offer.title}
            description={offer.description}
            icon={offer.icon}
          />
        ))}
      </div>
    </Container>
  </section>
  )
}

interface OfferCardProps {
  title: string
  icon: string
  description: string
}

const OfferCard: React.FC<OfferCardProps> = ({ title, icon, description }) => {
  return (
    <div
      className="p-5 text-center [&>img]:hover:animate-dance hover:scale-110 rounded-3xl transition-transform duration-300 border border-transparent"
    >
      <Image
        src={`/icons/${icon}.svg`}
        className="w-20 mx-auto mb-10 hover"
        alt={title}
        width={80}
        height={80}
      />
      <p
        className="mb-6 text-xl md:text-3xl font-medium capitalize pb-2 relative w-fit text-center before:content-[''] before:h-1 before:w-14 before:bg-secon before:absolute before:bottom-0 before:left-0 before:rounded mx-auto"
      >
        {title}
      </p>
      <p className="text-base md:text-lg">{description}</p>
    </div>
  )
}