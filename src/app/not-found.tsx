import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main>
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-docus-primary mb-6">
                <span className="block mb-4">Oops!</span>
                Page Not Found
              </h1>
              <p className="text-docus-primary/70 text-lg mb-8">
                This page doesn't exist or was removed! We suggest you to go back to home.
              </p>
              <Button className="bg-docus-accent hover:bg-docus-accent/90 text-white" size="lg" asChild>
                <Link href="/">Go Home</Link>
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-full max-w-lg">
                <div className="text-[12rem] font-bold text-docus-accent">4</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-docus-accent rounded-full h-40 w-40 flex items-center justify-center text-white text-6xl font-bold">
                    0
                  </div>
                </div>
                <div className="text-[12rem] font-bold text-docus-accent text-right">4</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
