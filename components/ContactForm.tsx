// components/ContactForm.tsx
"use client";
import { useState } from "react";
import { sendMessage } from "@/lib/appwrite";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      await sendMessage({...form})

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      console.error(err);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-indigo-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Let&apos;s Work Together</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-6 py-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
          />
          <input
            type="email"
            placeholder="your@email.com"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-6 py-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
          />
          <textarea
            rows={6}
            placeholder="Your message..."
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-6 py-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full cursor-pointer py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-70 transition"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && <p className="text-green-600">Message sent! I&apos;ll reply soon.</p>}
          {status === "error" && <p className="text-red-600">Something went wrong. Try again.</p>}
        </form>
      </div>
    </section>
  );
}