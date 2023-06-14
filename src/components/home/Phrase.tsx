import { Container } from "../ui/Container"

export const Phrase = () => {
  return (
    <section className="mb-10">
      <Container>
        <div className="relative">
          <div
            style={{backgroundImage: 'url(/images/mission.svg)'}}
            className="w-64 h-64 md:w-[650px] md:h-[650px] mx-auto opacity-40 z-10"
          >
          </div>
          <h5
            className="absolute left-0 right-0 z-30 text-2xl font-semibold text-center md:text-6xl top-1/2"
          >
            Anímate a hacer tu evento único
          </h5>
        </div>
      </Container>
    </section>
  )
}
