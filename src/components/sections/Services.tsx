"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ChevronRight, ActivitySquare, FileText, Users } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

type ServiceCardProps = {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  linkText: string;
  linkHref: string;
  delay: number;
};

const ServiceCard = ({ title, description, features, icon, linkText, linkHref, delay }: ServiceCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-xl p-6 shadow-sm"
      variants={fadeIn}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: delay * 0.15 }}
    >
      <div className="mb-6 text-docus-accent">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-docus-primary mb-2">{title}</h3>
      <p className="text-docus-primary/70 mb-6">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-start">
            <svg
              className="h-5 w-5 text-docus-accent mr-2 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm text-docus-primary/80">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={linkHref}
        className="flex items-center text-docus-accent font-medium text-sm hover:underline"
      >
        {linkText} <ChevronRight className="h-4 w-4 ml-1" />
      </Link>
    </motion.div>
  );
};

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-docus-primary mb-6">
            Make Informed Health Decisions
          </h2>
          <p className="text-docus-primary/80 text-lg max-w-3xl mx-auto">
            We have all you need to better understand your health and make informed and accurate decisions about your well-being.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Personal AI Doctor"
            description="Customize your personal AI Doctor, simply complete your health profile, ask your health questions, and receive personalized, data-driven advice."
            features={[
              "Get tailored insights",
              "Discover your health risks",
              "Get personal checkup plans",
              "Generate health reports",
            ]}
            icon={<ActivitySquare className="h-10 w-10" />}
            linkText="CHAT WITH AI DOCTOR"
            linkHref="/ai-doctor"
            delay={1}
          />

          <ServiceCard
            title="Lab Test Interpretation"
            description="Upload your lab results to receive in-depth biomarker interpretations and detailed lab report analysis from our AI Doctor."
            features={[
              "Understand lab results quickly",
              "Get detailed explanations",
              "Track changes over time",
              "Receive personalized recommendations",
            ]}
            icon={<FileText className="h-10 w-10" />}
            linkText="GO TO LAB TESTS"
            linkHref="/lab-test-interpretation"
            delay={2}
          />

          <ServiceCard
            title="Top Doctors Access"
            description="Connect with over 350 top doctors from the US and Europe for expert guidance, second opinions, and validation of AI-driven health insights."
            features={[
              "Access specialized expertise",
              "Get condition-specific guidance",
              "Receive personalized treatment plans",
              "Validate AI insights with doctors",
            ]}
            icon={<Users className="h-10 w-10" />}
            linkText="GET SECOND OPINION"
            linkHref="/second-opinion"
            delay={3}
          />
        </div>
      </div>
    </section>
  );
};
