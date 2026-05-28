"use client";

import { useState } from "react";
import type en from "@/dictionaries/en.json";
import ServiceModal from "./ServiceModal";

type ServiceItem = typeof en.services.items[number];

type Props = {
  aboutDict: typeof en.about;
  servicesDict: typeof en.services;
};

// Ordered to match: Web Dev, Mobile, Cloud/DevOps, UI/UX, API, Consulting
const serviceIcons = [
  // Globe / Web
  <svg key="web" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>,
  // Mobile
  <svg key="mobile" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>,
  // Cloud
  <svg key="cloud" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
  </svg>,
  // Design / Palette
  <svg key="design" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
  </svg>,
  // API / Code brackets
  <svg key="api" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>,
  // Consulting / Lightbulb
  <svg key="consulting" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
  </svg>,
];

export default function AboutServices({ aboutDict, servicesDict }: Props) {
  const [selected, setSelected] = useState<ServiceItem | null>(null);

  return (
    <>
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gray-400 text-sm font-semibold tracking-widest uppercase">
              {aboutDict.badge}
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6">{aboutDict.headline}</h2>
            <p className="text-gray-600 text-lg mb-4">{aboutDict.p1}</p>
            <p className="text-gray-600 text-lg">{aboutDict.p2}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {aboutDict.cards.map((item) => (
              <div key={item.label} className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">
                  {item.label}
                </p>
                <p className="text-gray-800 font-medium text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gray-400 text-sm font-semibold tracking-widest uppercase">
              {servicesDict.badge}
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3">{servicesDict.headline}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesDict.items.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setSelected(s)}
                className="text-left bg-white rounded-2xl p-7 border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-gray-200 transition-colors">
                  {serviceIcons[i]}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
                <span className="inline-block mt-4 text-xs text-gray-400 group-hover:text-gray-600 transition-colors">
                  Learn more →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <ServiceModal service={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
