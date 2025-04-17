"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ChevronRight, Activity, Heart, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

type BenefitCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
};

const BenefitCard = ({ icon, title, description, delay }: BenefitCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-xl p-6 md:p-8 shadow-sm flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay * 0.15 }}
    >
      <div className="mb-6 text-docus-accent bg-docus-accent/10 p-4 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-docus-primary mb-4">{title}</h3>
      <p className="text-docus-primary/70 mb-4 text-sm">{description}</p>
    </motion.div>
  );
};

export const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-docus-primary mb-6">
            Benefits of Personal AI Health Assistant
          </h2>
          <p className="text-docus-primary/80 text-lg max-w-3xl mx-auto">
            We have all you need to better understand your health and make informed and accurate decisions about your well-being.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <BenefitCard
            icon={<Activity className="h-8 w-8" />}
            title="Proactive Preventive Care"
            description="Utilize predictive analytics and expert advice to identify and prevent potential health issues early, optimizing your long-term wellness."
            delay={1}
          />

          <BenefitCard
            icon={<Heart className="h-8 w-8" />}
            title="Tailored Health Solutions"
            description="Get health support tailored to your needs with personalized plans and recommendations that integrate seamlessly to your lifestyle."
            delay={2}
          />

          <BenefitCard
            icon={<Brain className="h-8 w-8" />}
            title="In-Depth Health Insights"
            description="Gain a deeper understanding of your health with clear, actionable health insights that help you make informed decisions effectively."
            delay={3}
          />
        </div>

        <div className="flex justify-center">
          <Button
            className="bg-docus-accent hover:bg-docus-accent/90 text-white font-medium py-6 px-8 rounded-md"
            size="lg"
            asChild
          >
            <Link href="https://elivia-docure.vercel.app/">Try Elivia For Free</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
