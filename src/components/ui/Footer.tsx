import { Container } from "./Container"
import { SocialMedia } from "./SocialMedia"

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-10 text-white bg-black pb-7">
      <Container>
        <div>
          <div className="flex items-center justify-between">
            <a href="/" className="text-xl font-bold md:text-3xl">InvitArte</a>
            <SocialMedia />
          </div>
          <div className="w-full h-px mx-auto my-10 bg-gray-200 rounded"></div>
          <div className="flex flex-col items-center justify-center text-center md:flex-row md:justify-between">
            <span className="mb-3 md:mb-0">Copyright © {year} InvitArte.</span>
            <a href="/terminos">Aviso de privacidad I Términos y Condiciones</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
