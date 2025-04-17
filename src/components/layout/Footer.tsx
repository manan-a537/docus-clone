import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <Link href="/">
              <Image
                src="/docus-dark-logo.svg"
                alt="Docure.ai"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-docus-primary/80 text-sm mt-4 mb-6">
              Improving human health through the combination of cutting-edge
              technologies and top medical expertise.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com/docus_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-docus-primary/70 hover:text-docus-primary transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://www.facebook.com/docusai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-docus-primary/70 hover:text-docus-primary transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/docus.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-docus-primary/70 hover:text-docus-primary transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/docusai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-docus-primary/70 hover:text-docus-primary transition-colors"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h4 className="font-medium text-docus-primary mb-4">Company</h4>
            <div className="flex flex-col space-y-2">
              <Link
                href="/about-us"
                className="text-docus-primary/70 hover:text-docus-primary text-sm transition-colors"
              >
                About us
              </Link>
              <Link
                href="/pricing"
                className="text-docus-primary/70 hover:text-docus-primary text-sm transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="text-docus-primary/70 hover:text-docus-primary text-sm transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div className="col-span-1">
            <h4 className="font-medium text-docus-primary mb-4">Product</h4>
            <div className="flex flex-col space-y-2">
              <Link
                href="/ai-health-assistant"
                className="text-docus-primary/70 hover:text-docus-primary text-sm transition-colors"
              >
                AI Health Assistant
              </Link>
              <Link
                href="/ai-doctor"
                className="text-docus-primary/70 hover:text-docus-primary text-sm transition-colors"
              >
                AI Doctor
              </Link>
              <Link
                href="/lab-test-interpretation"
                className="text-docus-primary/70 hover:text-docus-primary text-sm transition-colors"
              >
                Lab Test Interpretation
              </Link>
              <Link
                href="/symptom-checker"
                className="text-docus-primary/70 hover:text-docus-primary text-sm transition-colors"
              >
                Symptom Checker
              </Link>
              <Link
                href="/second-opinion"
                className="text-docus-primary/70 hover:text-docus-primary text-sm transition-colors"
              >
                Second Opinion
              </Link>
              <Link
                href="https://docus.statuspage.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-docus-primary/70 hover:text-docus-primary text-sm transition-colors"
              >
                Live Product Status
              </Link>
            </div>
          </div>

          {/* Resources & Trust Links */}
          <div className="col-span-1 grid grid-cols-1 gap-8">
            <div>
              <h4 className="font-medium text-docus-primary mb-4">Resources</h4>
              <div className="flex flex-col space-y-2">
                <Link
                  href="/blog"
                  className="text-docus-primary/70 hover:text-docus-primary text-sm transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="/knowledge-base"
                  className="text-docus-primary/70 hover:text-docus-primary text-sm transition-colors"
                >
                  Knowledge Base
                </Link>
                <Link
                  href="/symptoms-guide"
                  className="text-docus-primary/70 hover:text-docus-primary text-sm transition-colors"
                >
                  Symptoms Guide
                </Link>
                <Link
                  href="/glossary"
                  className="text-docus-primary/70 hover:text-docus-primary text-sm transition-colors"
                >
                  Glossary
                </Link>
                <Link
                  href="/use-cases"
                  className="text-docus-primary/70 hover:text-docus-primary text-sm transition-colors"
                >
                  Use Cases
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-docus-primary mb-4">Trust</h4>
              <div className="flex flex-col space-y-2">
                <Link
                  href="https://trust.docus.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-docus-primary/70 hover:text-docus-primary text-sm transition-colors"
                >
                  Trust Center
                </Link>
                <Link
                  href="/terms-of-use"
                  className="text-docus-primary/70 hover:text-docus-primary text-sm transition-colors"
                >
                  Terms of use
                </Link>
                <Link
                  href="/privacy-policy"
                  className="text-docus-primary/70 hover:text-docus-primary text-sm transition-colors"
                >
                  Privacy policy
                </Link>
                <Link
                  href="/cookie-policy"
                  className="text-docus-primary/70 hover:text-docus-primary text-sm transition-colors"
                >
                  Cookie policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-docus-primary/70 text-sm">© 2025 Docure.ai, Inc.</p>
          <p className="text-docus-primary/70 text-sm mt-1">
            Sohna, Gurugram, HR 122103
          </p>
        </div>
      </div>
    </footer>
  );
};
