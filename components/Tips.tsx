"use client";

import { useState } from "react";
import { tips } from "@/lib/data";

export default function Tips() {
  const [open, setOpen] = useState<number | null>(null);

  const categories = Array.from(new Set(tips.map((t) => t.category)));

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Technique Tips</h2>

      {categories.map((cat) => (
        <div key={cat} className="space-y-2">
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{cat}</h3>
          {tips
            .filter((t) => t.category === cat)
            .map((tip) => (
              <div
                key={tip.id}
                className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(open === tip.id ? null : tip.id)}
                  className="w-full text-left px-4 py-3 flex items-center justify-between gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="font-medium">{tip.title}</span>
                  <span className="text-gray-400 text-lg shrink-0">{open === tip.id ? "−" : "+"}</span>
                </button>

                {open === tip.id && (
                  <div className="px-4 pb-4 space-y-3 border-t border-gray-100 dark:border-gray-700 pt-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300">{tip.body}</p>
                    <ul className="space-y-1.5">
                      {tip.keyPoints.map((point, i) => (
                        <li key={i} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <span className="text-gray-400 mt-0.5 shrink-0">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
