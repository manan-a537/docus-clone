"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const sendSOS = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const mailtoLink = `mailto:mananarora537@gmail.com?subject=Emergency Alert&body=There is an emergency at the location: Latitude ${latitude}, Longitude ${longitude}`;
        window.location.href = mailtoLink;
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <Image
            src="/docus-dark-logo.svg"
            alt="Docure.ai Logo"
            width={120}
            height={140}
            className="h-20 w-auto"
          />
        </Link>
        <div className="flex space-x-6 items-center">
          <Link
            href="/"
            className="text-docus-primary hover:text-docus-primary/80 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="text-docus-primary hover:text-docus-primary/80 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="https://nutritionmm-docure.vercel.app/"
            className="text-docus-primary hover:text-docus-primary/80 transition-colors"
          >
            AI Nutritionist
          </Link>
          <Link
            href="https://clinic-docure.vercel.app/"
            className="text-docus-primary hover:text-docus-primary/80 transition-colors"
          >
            Online Doctors
          </Link>
          <Link
            href="/signin"
            className="text-docus-primary hover:text-docus-primary/80 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="bg-docus-secondary text-white px-4 py-2 rounded-md hover:bg-docus-secondary/90 transition-colors"
          >
            Sign Up
          </Link>
          <button
            onClick={toggleTheme}
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <button
            onClick={sendSOS}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
          >
            SOS
          </button>
        </div>
      </div>
    </nav>
  );
};
