"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent of High School Student",
      content: "Our daughter's SAT score jumped from 1200 to 1520 in just 3 months. The personalized approach made all the difference.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "College Freshman",
      content: "Thanks to the tutoring, I got into Stanford with a full scholarship. The math prep was incredible.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Middle School Parent",
      content: "My son went from C's to A's in all subjects. The confidence boost has been amazing to see.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Parents & Students Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real families who've experienced academic transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-background rounded-lg p-8 shadow-lg border hover:shadow-xl transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}