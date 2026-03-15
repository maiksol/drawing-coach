"use client";

import { useState } from "react";
import { guides, Guide } from "@/lib/data";

const difficultyColor: Record<string, string> = {
  beginner: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

export default function Guides() {
  const [selected, setSelected] = useState<Guide | null>(null);

  if (selected) {
    return (
      <div className="space-y-6">
        <button
          onClick={() => setSelected(null)}
          className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          ← Back to guides
        </button>

        <div>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize ${difficultyColor[selected.difficulty]}`}>
              {selected.difficulty}
            </span>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              {selected.timeEstimate}
            </span>
          </div>
          <h2 className="text-2xl font-bold">{selected.title}</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">{selected.intro}</p>
        </div>

        <div className="space-y-4">
          {selected.steps.map((step) => (
            <div key={step.step} className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center text-sm font-bold">
                {step.step}
              </div>
              <div className="pt-1 space-y-1">
                <p className="font-semibold">{step.instruction}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{step.hint}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Step-by-Step Guides</h2>

      <div className="grid gap-3 sm:grid-cols-2">
        {guides.map((guide) => (
          <button
            key={guide.id}
            onClick={() => setSelected(guide)}
            className="text-left border border-gray-200 dark:border-gray-700 rounded-xl p-4 space-y-2 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
          >
            <div className="flex flex-wrap gap-1.5">
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full capitalize ${difficultyColor[guide.difficulty]}`}>
                {guide.difficulty}
              </span>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                {guide.timeEstimate}
              </span>
            </div>
            <p className="font-semibold">{guide.title}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{guide.steps.length} steps</p>
          </button>
        ))}
      </div>
    </div>
  );
}
