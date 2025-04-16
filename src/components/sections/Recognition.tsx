"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export const Recognition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const logos = [
    {
      src: "/images/forbes.png",
      alt: "Forbes",
      width: 120,
      height: 40,
    },
    {
      src: "/images/usa-today.png",
      alt: "USA Today",
      width: 100,
      height: 40,
    },
    {
      src: "/images/entrepreneur.png",
      alt: "Entrepreneur",
      width: 140,
      height: 40,
    },
    {
      src: "/images/cnbc.png",
      alt: "CNBC",
      width: 100,
      height: 40,
    },
  ];

  return (
    <section className="py-8 md:py-16 border-t border-gray-100">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-docus-primary/60 text-sm font-medium uppercase tracking-wider">
            Global Recognition
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.alt}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-10 w-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
