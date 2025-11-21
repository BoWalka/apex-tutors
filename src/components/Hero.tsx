"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="hero-gradient text-white py-32 overflow-hidden relative">
      <div className="absolute inset-0 bg-black/30" />
       
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Your Child Deserves<br />
              <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Perfect Scores
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100">
              1-on-1 private tutoring with a proven, perfect-score educator who has transformed hundreds of students into A+ scholars.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-7">
                <Link href="#contact">Book Free Consultation →</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 text-lg px-10 py-7">
                View Success Stories
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-white/20 rounded-full blur-3xl" />
            <Image
              src="/tutor-photo.jpg"
              alt="Your girlfriend - Elite Tutor"
              width={600}
              height={700}
              className="rounded-3xl shadow-2xl relative z-10 border-8 border-white/30"
              priority
            />
            <div className="absolute bottom-4 left-4 bg-white/90 text-blue-600 px-6 py-3 rounded-full text-lg font-semibold backdrop-blur">
              10+ Years Experience · 100% A/A* Rate
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}