"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const Cta = () => {
  return (
    <section className="py-16 md:py-24 bg-docus-primary text-white">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            You're only one click away
            <br /> from a life-changing journey
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <Button
            className="bg-docus-accent hover:bg-docus-accent/90 text-white font-medium py-6 px-8 rounded-md"
            size="lg"
            asChild
          >
            <Link href="https://elivia-docure.vercel.app/">Try Elivia For Free</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12"
        >
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-docus-accent mr-2" />
            <span className="text-sm text-white/80">24/7 on-demand doctors</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-docus-accent mr-2" />
            <span className="text-sm text-white/80">Virtual health assistant powered by AI</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
