"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

type TestimonialProps = {
  quote: string;
  author: string;
  delay: number;
};

const Testimonial = ({ quote, author, delay }: TestimonialProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="bg-docus-light rounded-xl p-6 md:p-8 shadow-sm relative"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay * 0.15 }}
    >
      <Quote className="h-8 w-8 text-docus-accent/30 absolute top-6 left-6" />
      <div className="pt-8">
        <p className="text-docus-primary/80 text-sm italic mb-6 min-h-[100px]">{quote}</p>
        <div className="flex items-center">
          <div className="bg-docus-gray/20 rounded-full h-10 w-10 flex items-center justify-center text-docus-primary mr-3">
            {author.split(' ').map(name => name[0]).join('')}
          </div>
          <span className="text-docus-primary font-medium">{author}</span>
        </div>
      </div>
    </motion.div>
  );
};

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const testimonials = [
    {
      quote: "As an athlete, maintaining optimal health is crucial. Docure.ai has been a game-changer, providing insights that help me fine-tune my training, optimize my nutrition, and prevent injuries. I'm thrilled to have found Docure.ai.",
      author: "Eric S.",
      delay: 1,
    },
    {
      quote: "Dealing with health anxiety, every little symptom used to send me into a spiral of internet searches and speculation. Discovering Docure.ai has been transformative for my mental health, providing clear, concise insights, guiding me on when to seek medical attention.",
      author: "Alex T.",
      delay: 2,
    },
    {
      quote: "Docure.ai enabled me to conveniently discuss a health concern from a distant location when travel expenses were prohibitive. I appreciate the seamless and holistic approach to healthcare, bridging the gap of accessibility and access to expert medical advice.",
      author: "Casey R.",
      delay: 3,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-docus-primary mb-6">
            Our Users Love Us
          </h2>
          <p className="text-docus-primary/80 text-lg max-w-3xl mx-auto">
            Discover how Docure.ai has transformed the way people understand and manage their health.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={testimonial.author}
              quote={testimonial.quote}
              author={testimonial.author}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
