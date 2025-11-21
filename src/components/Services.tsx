"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const services = [
  { grade: "Elementary (K-5)", desc: "Building strong foundations in math, reading, phonics & confidence" },
  { grade: "Middle School (6-8)", desc: "Pre-Algebra, Algebra I, English, Science — closing gaps fast" },
  { grade: "High School (9-12)", desc: "Algebra II, Geometry, Pre-Calc, Calculus, Physics, Chemistry, AP courses" },
  { grade: "Test Prep", desc: "SAT, ACT, PSAT, SAT Subject Tests, AP Exams — perfect score guarantee" },
  { grade: "College Level", desc: "Calculus I-III, Linear Algebra, Statistics, Economics, College Essays" },
  { grade: "Competition Prep", desc: "AMC 8/10/12, AIME, MathCounts, F=ma, Chemistry Olympiad" },
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            All Grades. All Subjects. All Excellence.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Personalized 1-on-1 tutoring tailored exactly to your child's needs. In-person or online.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-8 h-full hover:shadow-2xl transition-shadow border-2 hover:border-primary/50">
                <Badge className="mb-4" variant="secondary">{service.grade}</Badge>
                <p className="text-lg text-muted-foreground">{service.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}