import React from 'react';

export default function About() {
  return (
    <section className="py-16 bg-warm-50 text-warm-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">About Apex Tutoring</h2>
        <p className="text-lg mb-4">
          At Apex Tutoring, we&apos;re committed to providing personalized guidance for every student.
        </p>
        <p className="text-lg mb-4">
          We understand that learning isn&apos;t a one-size-fits-all process.
        </p>
        <blockquote className="italic border-l-4 border-warm-500 pl-4 py-2 my-6 bg-warm-100 rounded-r-lg">
          &quot;Education is not the learning of facts, but the training of the mind to think.&quot;
        </blockquote>
      </div>
    </section>
  );
}
