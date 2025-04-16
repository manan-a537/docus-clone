"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header-wrapper ${isScrolled ? "shadow-sm" : ""}`}>
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="z-10">
            <Image
              src="/docus-dark-logo.sg"
              alt="Docure.ai"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-docus-primary font-medium">
                  Solutions
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/ai-health-assistant" className="cursor-pointer">
                    AI Health Assistant
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/ai-doctor" className="cursor-pointer">
                    AI Doctor
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/lab-test-interpretation" className="cursor-pointer">
                    Lab Test Interpretation
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/pricing"
              className="text-docus-primary font-medium hover:text-docus-primary/80 transition-colors"
            >
              Pricing
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-docus-primary font-medium">
                  Resources
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/blog" className="cursor-pointer">
                    Blog
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/knowledge-base" className="cursor-pointer">
                    Knowledge Base
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/symptom-guide" className="cursor-pointer">
                    Symptom Guide
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/for-labs"
              className="text-docus-secondary font-medium hover:text-docus-secondary/80 transition-colors"
            >
              For Labs
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button
              variant="ghost"
              className="text-docus-primary font-medium"
              asChild
            >
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <Button
              className="bg-docus-secondary hover:bg-docus-secondary/90 text-white"
              asChild
            >
              <Link href="/get-started">Get Started for Free</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white pt-16">
          <div className="container">
            <div className="flex flex-col space-y-4 py-8">
              <Link
                href="/ai-health-assistant"
                className="text-docus-primary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                AI Health Assistant
              </Link>
              <Link
                href="/ai-doctor"
                className="text-docus-primary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                AI Doctor
              </Link>
              <Link
                href="/lab-test-interpretation"
                className="text-docus-primary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Lab Test Interpretation
              </Link>
              <Link
                href="/pricing"
                className="text-docus-primary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                className="text-docus-primary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/for-labs"
                className="text-docus-secondary font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                For Labs
              </Link>

              <div className="flex flex-col space-y-4 pt-4">
                <Button
                  variant="outline"
                  className="w-full"
                  asChild
                >
                  <Link href="/sign-in" onClick={() => setMobileMenuOpen(false)}>
                    Sign in
                  </Link>
                </Button>
                <Button
                  className="bg-docus-secondary hover:bg-docus-secondary/90 text-white w-full"
                  asChild
                >
                  <Link href="/get-started" onClick={() => setMobileMenuOpen(false)}>
                    Get Started for Free
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
