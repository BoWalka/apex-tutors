"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function WhyUs() {
  const reasons = [
    {
      title: "Proven Track Record",
      description: "Perfect scores on SAT, ACT, and AP exams. 100% success rate with A/A* grades.",
    },
    {
      title: "Personalized Approach",
      description: "1-on-1 tutoring tailored to your child's learning style and pace.",
    },
    {
      title: "Expert Educator",
      description: "Over 10 years of experience with top-tier universities and elite students.",
    },
    {
      title: "Flexible Scheduling",
      description: "Online and in-person options available to fit your busy schedule.",
    },
    {
      title: "Comprehensive Coverage",
      description: "All subjects and grade levels from elementary to college prep.",
    },
    {
      title: "Results Guaranteed",
      description: "Score improvements or your money back. That's our promise.",
    },
  ];

  return (
    <section id="why" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Apex Academy?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just tutors — we're your partners in academic excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-lg p-8 shadow-lg border hover:shadow-xl transition-shadow"
            >
              <CheckCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}