"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "What is Docure.ai?",
    answer: "Docure.ai is an AI-powered health platform providing personalized health insights, lab test interpretations, and access to qualified medical professionals for second opinions. Our platform is designed to help you make informed health decisions."
  },
  {
    question: "How can I get started with Docure.ai and manage my health?",
    answer: "Getting started is easy! Just sign up for a free account, complete your health profile, and start using our AI Doctor for personalized insights or upload lab results for interpretation. You can also connect with doctors for second opinions."
  },
  {
    question: "What kind of health issues can Docure.ai help with?",
    answer: "Docure.ai can assist with a wide range of health concerns including preventive care, understanding lab results, symptom evaluation, chronic condition management, nutrition advice, and mental health support. Our platform is designed to complement traditional healthcare."
  },
  {
    question: "How reliable are the health insights provided by Docure.ai?",
    answer: "Our AI health insights are based on the latest medical research and are designed to be highly accurate. However, we always recommend validating critical health insights with qualified healthcare professionals, which is why we offer access to our network of doctors."
  },
  {
    question: "What is Docure.ai AI Doctor?",
    answer: "Docure.ai AI Doctor is our advanced AI-powered health assistant that provides personalized health insights, answers health questions, helps interpret symptoms, and offers preventive care recommendations based on your health profile and concerns."
  },
  {
    question: "How do I get a second opinion through Docure.ai?",
    answer: "After receiving AI insights, you can request a second opinion from our network of qualified doctors. Simply click the 'Get Second Opinion' button, select a doctor based on specialization, and schedule a consultation through our secure platform."
  },
  {
    question: "Can Docure.ai replace my doctor?",
    answer: "No, Docure.ai is designed to complement, not replace, your primary healthcare provider. We provide additional insights, information, and second opinions to help you make informed decisions about your health, but recommend maintaining a relationship with your regular doctor."
  },
  {
    question: "How do I ensure my health data is safe with Docure.ai?",
    answer: "We take data security very seriously. All health data is encrypted end-to-end and stored in compliance with HIPAA and GDPR standards. We never share your personal information without your explicit consent, and you can delete your data at any time."
  },
  {
    question: "Why should I choose Docure.ai as my Personal Health Assistant?",
    answer: "Docure.ai offers a unique combination of AI-powered insights and human medical expertise, providing personalized health information, lab interpretations, symptom evaluation, and access to qualified doctors all in one platform, making it a comprehensive solution for proactive health management."
  }
];

export const Faq = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-16 md:py-24 bg-docus-light">
      <div className="container max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-docus-primary mb-6">
            Have questions? Let&apos;s find answers
          </h2>
        </motion.div>

        <div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.question} value={`item-${item.question}`}>
                <AccordionTrigger className="text-left text-docus-primary font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-docus-primary/80">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 text-center">
            <p className="text-docus-primary/70 mb-4">
              Have more questions?{" "}
              <Link
                href="/contact"
                className="text-docus-accent font-medium hover:underline"
              >
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
