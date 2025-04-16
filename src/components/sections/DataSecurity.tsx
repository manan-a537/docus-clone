"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { LockKeyhole, Shield, FileKey } from "lucide-react";

export const DataSecurity = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-16 md:py-24 bg-docus-primary text-white">
      <div className="container">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto bg-docus-primary/90 p-8 rounded-xl border border-docus-primary/40 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
            {/* Lock Icon */}
            <div className="md:w-1/4 flex justify-center">
              <div className="bg-docus-accent/20 rounded-full p-6">
                <LockKeyhole className="h-16 w-16 text-docus-accent" />
              </div>
            </div>

            {/* Text Content */}
            <div className="md:w-3/4">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                Your data
                <span className="bg-docus-accent/20 text-docus-accent px-3 py-1 ml-2 rounded-md">
                  is secure
                </span>
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-docus-accent mt-0.5" />
                  <p className="text-sm text-white/90">
                    No personally identifiable information is required to create the Docure AI Health Assistant account.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <FileKey className="h-5 w-5 text-docus-accent mt-0.5" />
                  <p className="text-sm text-white/90">
                  Talk to our AI, it’s like a doctor, therapist, and bestie all rolled into one 🤖💬. Your secrets are safe, even from nosy aunties! 🔐😄
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="https://healthcare-sand-seven.vercel.app/"
                  className="text-sm text-docus-accent font-medium hover:text-docus-accent/80 transition-colors"
                >
                  Talk to Elivia
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
