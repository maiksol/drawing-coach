"use client";

import { useState } from "react";
import DailyChallenge from "@/components/DailyChallenge";
import Prompts from "@/components/Prompts";
import Guides from "@/components/Guides";
import Tips from "@/components/Tips";
import TimedPractice from "@/components/TimedPractice";

type Tab = "daily" | "prompts" | "guides" | "tips" | "timed";

const tabs: { id: Tab; label: string }[] = [
  { id: "daily", label: "Daily" },
  { id: "prompts", label: "Prompts" },
  { id: "guides", label: "Guides" },
  { id: "tips", label: "Tips" },
  { id: "timed", label: "Timed" },
];

export default function Home() {
  const [tab, setTab] = useState<Tab>("daily");

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-[var(--background)] z-10">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center h-14">
            <span className="font-bold text-lg tracking-tight">Drawing Coach</span>
          </div>
          <nav className="flex gap-1 -mb-px">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`px-3 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                  tab === t.id
                    ? "border-gray-900 dark:border-white text-gray-900 dark:text-white"
                    : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        {tab === "daily" && <DailyChallenge />}
        {tab === "prompts" && <Prompts />}
        {tab === "guides" && <Guides />}
        {tab === "tips" && <Tips />}
        {tab === "timed" && <TimedPractice />}
      </main>
    </div>
  );
}
