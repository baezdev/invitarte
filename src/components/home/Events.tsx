import { Event } from "@/interfaces/interfaces"
import { Container } from "../ui/Container"
import { LinkButton } from "../ui/LinkButton"
import { Title } from "../ui/Title"

import events from '@/data/events.json'

export const Events = () => {
  return (
    <section className="py-20 mb-24 bg-black">
      <Container>
        <Title textColor="white">
          Para cualquier ocasión.
        </Title>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8">
          {events.map((event) => (
            <EventCard
              key={event.eventName}
              eventName={event.eventName}
              image={event.image}
            />
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-base text-white md:text-lg mb-7">
            Sabemos que existen muchos eventos <br />
            Si no lo encontraste aquí, tranqui
          </p>
          <LinkButton text="cuentanos tus ideas" href="/contact" />
        </div>
      </Container>
    </section>
  )
}

const EventCard: React.FC<Event> = ({ image, eventName }) => {
  return (
    <div>
      <div className="w-full h-56 overflow-hidden rounded-xl">
        <div
          className="w-full h-full transition-transform duration-200 ease-in-out bg-center bg-cover hover:scale-110"
          style={{
            backgroundImage: `url('/images/${image}.webp')`
          }}
        >
        </div>
      </div>
      <p className="mt-2 text-lg font-semibold text-white capitalize">
        {eventName}
      </p>
    </div>
  )
}