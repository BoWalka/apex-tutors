/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-16 bg-warm-100 text-warm-900">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">What Families Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-warm-50 border border-warm-200 rounded-2xl">
            <p className="mb-4">
              It&apos;s made a world of difference in my daughter&apos;s confidence.
            </p>
            <p className="font-semibold">&quot;The best tutoring experience ever.&quot;</p>
          </div>
        </div>
      </div>
    </section>
  );
}
