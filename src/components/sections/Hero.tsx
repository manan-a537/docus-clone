"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsVisible(true);
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section className="py-12 md:py-20 overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <motion.div
            className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-docus-primary mb-4">
              Your Personal
              <br />
              Health Assistant
            </h1>
            <h2 className="text-xl md:text-2xl text-docus-accent font-semibold mb-6">
              Powered by AI
            </h2>
            <p className="text-docus-primary/80 text-base md:text-lg mb-8">
              Prevent potential health issues and effectively
              <br className="hidden md:block" />
              manage your health. Gain insights with our AI Doctor
              <br className="hidden md:block" />
              and validate them with top doctors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-docus-accent hover:bg-docus-accent/90 text-white font-medium py-6 px-8 rounded-md w-full sm:w-auto"
                size="lg"
                asChild
              >
                <Link href="https://e5c1bed09380329bdb.gradio.live">Try Docure For Free</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-8">
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="h-5 w-5 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                </div>
                <span className="text-docus-primary/80 text-sm ml-2 font-medium">Excellent</span>
              </div>
              <p className="text-docus-primary/60 text-xs mb-4">
                This site uses cookies to enhance the quality of its services.
              </p>
              <div className="flex items-center gap-6">
                <Image
                  src="/images/hipaa.png"
                  alt="HIPAA Compliant"
                  width={60}
                  height={30}
                />
                <Image
                  src="/images/gdpr.png"
                  alt="GDPR Compliant"
                  width={60}
                  height={30}
                />
              </div>
            </div>
          </motion.div>

          {/* Video/Image */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-xl overflow-hidden shadow-xl bg-white">
              <video
                ref={videoRef}
                className="w-full h-auto"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/home-intro.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
