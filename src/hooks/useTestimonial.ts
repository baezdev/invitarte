'use client'

import { useState, useEffect } from "react";
import testimonials from '@/data/testimonials.json'
import { type Testimonial } from "@/interfaces/interfaces";

export const useTestimonial = () => {
  const [testimonialNumber, setTestimonialNumber] = useState(0);
  const [testimonialData, setTestimonialData] = useState<Testimonial>();

  const totalTestimonials = testimonials.length;

  useEffect(() => {
    setTestimonialData(testimonials[testimonialNumber]);
  }, [testimonialNumber]);

  const rating = testimonialData?.rating ?? 5;
  const stars: Array<number> = [];

  for (let i = 1; i <= rating; i++) {
    stars.push(i);
  }

  function nextTestimonial() {
    if (testimonialNumber >= testimonials.length - 1) {
      setTestimonialNumber(0);
      return;
    }

    setTestimonialNumber(testimonialNumber + 1);
  }

  function previusTestimonial() {
    if (testimonialNumber <= 0) {
      return;
    }

    setTestimonialNumber(testimonialNumber - 1);
  }

  return {
    name: testimonialData?.name,
    message: testimonialData?.message,
    stars,
    totalTestimonials,
    currentTestimonial: testimonialNumber,
    nextTestimonial,
    previusTestimonial,
  };
};
