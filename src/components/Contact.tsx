"use client";

import { useState, FormEvent } from "react";
import type en from "@/dictionaries/en.json";

type Props = { dict: typeof en.contact };

export default function Contact({ dict }: Props) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const data = new FormData(e.currentTarget);

    // Build a labeled object using the translated field labels as keys
    // This makes the email self-describing regardless of which fields exist
    const fields: Record<string, string> = {
      [dict.form.name]: data.get("name") as string,
      [dict.form.email]: data.get("email") as string,
      [dict.form.subject]: data.get("subject") as string,
      [dict.form.message]: data.get("message") as string,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields),
    });

    setLoading(false);
    if (res.ok) {
      setSent(true);
    } else {
      setError(true);
    }
  }

  return (
    <section id="contact" className="py-24 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <span className="text-gray-400 text-sm font-semibold tracking-widest uppercase">
            {dict.badge}
          </span>
          <h2 className="text-4xl font-bold mt-3 mb-6">{dict.headline}</h2>
          <p className="text-gray-400 text-lg mb-8">{dict.description}</p>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center gap-3">
              <span className="text-gray-300">✉</span>
              {dict.email}
            </li>
            <li className="flex items-center gap-3">
              <span className="text-gray-300">📍</span>
              {dict.location}
            </li>
          </ul>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          {sent ? (
            <div className="text-center py-8">
              <p className="text-3xl mb-4">🎉</p>
              <p className="text-xl font-semibold">{dict.successTitle}</p>
              <p className="text-gray-400 mt-2 text-sm">{dict.successBody}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-300 mb-1" htmlFor="name">
                    {dict.form.name}
                  </label>
                  <input id="name" name="name" type="text" required placeholder={dict.form.namePlaceholder}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-400" />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1" htmlFor="email">
                    {dict.form.email}
                  </label>
                  <input id="email" name="email" type="email" required placeholder={dict.form.emailPlaceholder}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-400" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1" htmlFor="subject">
                  {dict.form.subject}
                </label>
                <input id="subject" name="subject" type="text" required placeholder={dict.form.subjectPlaceholder}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-400" />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1" htmlFor="message">
                  {dict.form.message}
                </label>
                <textarea id="message" name="message" required rows={5} placeholder={dict.form.messagePlaceholder}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 resize-none" />
              </div>
              {error && (
                <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
              )}
              <button type="submit" disabled={loading}
                className="w-full py-3 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-200 transition-colors disabled:opacity-50">
                {loading ? "Sending…" : dict.form.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
