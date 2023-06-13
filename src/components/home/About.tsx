import { Container } from "../ui/Container"
import { Title } from "../ui/Title"
import { AboutSlider } from "./AboutSlider"

export const About = () => {
  return (
    <section className="mb-24" id="about">
      <Container>
        <Title>
          Conócenos
        </Title>
        <article>
          <AboutSlider />
        </article>
      </Container>
    </section>

  )
}