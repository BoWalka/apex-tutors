/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function Services() {
  return (
    <section className="py-16 bg-warm-50 text-warm-900">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-warm-100 border border-warm-300 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">1-on-1 Tutoring</h3>
            <p>
              Tailored academic support designed around each student&apos;s individual strengths and goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
