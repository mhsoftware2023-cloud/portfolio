"use client";

import { useEffect } from "react";
import type en from "@/dictionaries/en.json";

type ServiceItem = typeof en.services.items[number];
type Props = { service: ServiceItem; onClose: () => void };

export default function ServiceModal({ service, onClose }: Props) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <span className="text-4xl">{service.icon}</span>
            <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 text-2xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <p className="text-gray-600 leading-relaxed mb-6">{service.details}</p>

        <ul className="space-y-2">
          {service.bullets.map((b) => (
            <li key={b} className="flex items-center gap-3 text-sm text-gray-700">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
