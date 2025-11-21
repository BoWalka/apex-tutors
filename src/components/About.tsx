"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Meet Your Child's New Favorite Tutor
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              With over 10 years of experience and a perfect-score track record on SAT, ACT, AP exams, and every major curriculum, 
              [Her Name] has quietly become the most sought-after private tutor in [City/Online].
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              She doesn't just teach — she unlocks potential. Former students now attend Stanford, Harvard, MIT, and Ivy League schools. 
              Many scored perfect 1600 SATs and 36 ACTs under her guidance.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground">Students Taught</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">100%</div>
                <div className="text-muted-foreground">A/A* Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">10+ yrs</div>
                <div className="text-muted-foreground">Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/tutor-photo.jpg"
              alt="[Her Name] - Elite Private Tutor"
              width={600}
              height={800}
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-8 py-4 rounded-2xl text-xl font-semibold">
              "I turn good students into extraordinary ones."
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}