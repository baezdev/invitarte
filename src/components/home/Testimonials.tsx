'use client'

import { useTestimonial } from "@/hooks/useTestimonial";
import { Container } from "../ui/Container"
import { Title } from "../ui/Title"
import Image from "next/image";
import { ArrowButton } from "./ArrowButton";
import { TestimonialsCarousel } from "./TestimonialCarousel";

export const Testimonials = () => {
  return (
    <section className="mb-24">
      <Container>
        <Title>
          Testimonios
        </Title>
        <div>
          <Testimonial  />
        </div>
      </Container>
    </section>
  )
}


export const Testimonial = () => {
  const {
    name,
    message,
    stars,
    totalTestimonials,
    currentTestimonial,
    previusTestimonial,
    nextTestimonial,
  } = useTestimonial();

  return (
    <div className="flex items-center justify-center gap-10">
      <div className="relative w-[650px] h-72 flex items-center justify-center flex-col text-center rounded-3xl p-5">
        <p className="mb-5 text-2xl font-semibold">{name}</p>
        <p className="text-base md:text-lg mb-7">{message}</p>
        <div className="flex gap-3">
          {stars.map((_, i) => (
            <Image key={i} src="/icons/star.svg" alt="star" width={24} height={24}/>
          ))}
        </div>
        <div className="absolute flex items-center gap-10 -bottom-20">
          <div>
            <ArrowButton onClick={previusTestimonial} arrowDirection="left" />
          </div>
          <TestimonialsCarousel
            total={totalTestimonials}
            current={currentTestimonial}
          />
          <div>
            <ArrowButton onClick={nextTestimonial} arrowDirection="right" />
          </div>
        </div>
      </div>
    </div>
  );
};