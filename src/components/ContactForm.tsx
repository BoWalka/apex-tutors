import React from 'react';

export default function ContactForm() {
  return (
    <section className="py-16 bg-warm-100 text-warm-900">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-4">
          Ready to boost your academic performance? We&apos;ll be happy to answer any questions you have.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input type="text" className="w-full p-3 rounded-lg border border-warm-300 bg-warm-50" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full p-3 rounded-lg border border-warm-300 bg-warm-50" />
          </div>
          <button type="submit" className="px-6 py-3 bg-warm-500 text-white font-medium rounded-lg hover:bg-warm-600 transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
