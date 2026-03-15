"use client";

import { getDailyPrompt } from "@/lib/data";

const difficultyColor: Record<string, string> = {
  beginner: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

export default function DailyChallenge() {
  const prompt = getDailyPrompt();
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{today}</p>
        <h2 className="text-2xl font-bold">Today&apos;s Challenge</h2>
      </div>

      <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize ${difficultyColor[prompt.difficulty]}`}>
            {prompt.difficulty}
          </span>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 capitalize">
            {prompt.category}
          </span>
        </div>

        <p className="text-xl font-semibold leading-snug">{prompt.text}</p>

        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Tips for this drawing:</p>
          <ul className="space-y-1.5">
            {prompt.tips.map((tip, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        A new challenge is available every day. Come back tomorrow for a different prompt.
      </p>
    </div>
  );
}
