import { Container } from "./Container"
import { NavLinks } from "./NavLinks"

export const Navbar = () => {
  return (
    <nav>
      <Container>
        <div className="relative flex items-center justify-between h-24 z-10">
          <a href="/" className="text-xl md:text-3xl font-bold">InvitArte</a>
          <NavLinks />
        </div>
      </Container>
    </nav>
  )
}