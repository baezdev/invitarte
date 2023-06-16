import { LinkButton } from "../ui/LinkButton"
import { Navbar } from "../ui/Navbar"

export const Header = () => {
  return (
    <header>
      <Navbar />
      <div className="mt-16 text-center">
        <h1 className="font-semibold text-6xl md:text-8xl">Invit Arte</h1>
        <h2 className="text-4xl md:text-6xl font-semibold">
          Crea invitaciones a <span
            className="relative inline-block before:block before:absolute before:-inset-2 before:-skew-y-3 before:bg-pink-500"
            ><span className="relative font-bold text-white z-0">tu estilo</span></span
          >
        </h2>
        <p className="text-lg md:text-xl mt-14">
          Plasma tus ideas y personaliza tus invitaciones <br /> de una forma facil y
          sencilla.
        </p>
        <div className="mt-14">
          <LinkButton text="comienza tu experiencia" href="#offer" />
        </div>
      </div>
    </header>
  )
}