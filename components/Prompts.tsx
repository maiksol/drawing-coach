"use client";

import { useState } from "react";
import { prompts, Difficulty, Category } from "@/lib/data";

const difficultyColor: Record<string, string> = {
  beginner: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

const difficulties: Difficulty[] = ["beginner", "intermediate", "advanced"];
const categories: Category[] = ["animals", "people", "landscapes", "objects", "still life"];

export default function Prompts() {
  const [difficulty, setDifficulty] = useState<Difficulty | "all">("all");
  const [category, setCategory] = useState<Category | "all">("all");
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  const filtered = prompts.filter(
    (p) =>
      (difficulty === "all" || p.difficulty === difficulty) &&
      (category === "all" || p.category === category)
  );

  function toggleTips(id: number) {
    setRevealed((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Drawing Prompts</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <div className="space-y-1">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Difficulty</p>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setDifficulty("all")}
              className={`text-sm px-3 py-1 rounded-full border transition-colors ${difficulty === "all" ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 border-transparent" : "border-gray-300 dark:border-gray-600 hover:border-gray-500"}`}
            >
              All
            </button>
            {difficulties.map((d) => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`text-sm px-3 py-1 rounded-full border capitalize transition-colors ${difficulty === d ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 border-transparent" : "border-gray-300 dark:border-gray-600 hover:border-gray-500"}`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Category</p>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setCategory("all")}
              className={`text-sm px-3 py-1 rounded-full border transition-colors ${category === "all" ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 border-transparent" : "border-gray-300 dark:border-gray-600 hover:border-gray-500"}`}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`text-sm px-3 py-1 rounded-full border capitalize transition-colors ${category === c ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 border-transparent" : "border-gray-300 dark:border-gray-600 hover:border-gray-500"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Prompt list */}
      {filtered.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No prompts match your filters.</p>
      ) : (
        <div className="grid gap-3">
          {filtered.map((prompt) => (
            <div
              key={prompt.id}
              className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 space-y-3"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="font-medium leading-snug">{prompt.text}</p>
                <div className="flex gap-1.5 shrink-0 flex-wrap justify-end">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full capitalize ${difficultyColor[prompt.difficulty]}`}>
                    {prompt.difficulty}
                  </span>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 capitalize">
                    {prompt.category}
                  </span>
                </div>
              </div>

              <button
                onClick={() => toggleTips(prompt.id)}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                {revealed.has(prompt.id) ? "Hide tips" : "Show tips"}
              </button>

              {revealed.has(prompt.id) && (
                <ul className="space-y-1">
                  {prompt.tips.map((tip, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-gray-400 mt-0.5">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
