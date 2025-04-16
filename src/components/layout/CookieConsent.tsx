"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookiesAccepted");
    if (!hasAccepted) {
      // Show the banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200 py-3 z-50"
        >
          <div className="container">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-docus-primary/80 text-sm">
                This site uses{" "}
                <Link
                  href="/cookie-policy"
                  className="text-docus-accent font-medium"
                >
                  cookies
                </Link>{" "}
                to enhance the quality of its services.
              </p>
              <button
                onClick={acceptCookies}
                className="bg-docus-accent hover:bg-docus-accent/90 text-white rounded-md px-6 py-2 text-sm font-medium"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
