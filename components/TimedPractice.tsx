"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { prompts } from "@/lib/data";

const DURATIONS = [
  { label: "30 sec", seconds: 30 },
  { label: "1 min", seconds: 60 },
  { label: "2 min", seconds: 120 },
  { label: "5 min", seconds: 300 },
  { label: "10 min", seconds: 600 },
];

function randomPrompt() {
  return prompts[Math.floor(Math.random() * prompts.length)];
}

export default function TimedPractice() {
  const [duration, setDuration] = useState(60);
  const [timeLeft, setTimeLeft] = useState(60);
  const [running, setRunning] = useState(false);
  const [prompt, setPrompt] = useState(randomPrompt);
  const [finished, setFinished] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setRunning(false);
  }, []);

  const finish = useCallback(() => {
    stop();
    setFinished(true);
  }, [stop]);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            finish();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running, finish]);

  function start() {
    setTimeLeft(duration);
    setFinished(false);
    setPrompt(randomPrompt());
    setRunning(true);
  }

  function reset() {
    stop();
    setTimeLeft(duration);
    setFinished(false);
  }

  function next() {
    setPrompt(randomPrompt());
    setTimeLeft(duration);
    setFinished(false);
    setRunning(true);
  }

  const progress = ((duration - timeLeft) / duration) * 100;
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Timed Practice</h2>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        Pick a time limit, get a random prompt, and draw. Great for building speed and confidence.
      </p>

      {/* Duration picker */}
      <div className="space-y-2">
        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Time per drawing</p>
        <div className="flex flex-wrap gap-2">
          {DURATIONS.map((d) => (
            <button
              key={d.seconds}
              disabled={running}
              onClick={() => {
                setDuration(d.seconds);
                setTimeLeft(d.seconds);
                setFinished(false);
              }}
              className={`px-4 py-2 rounded-full text-sm border transition-colors disabled:opacity-40 ${
                duration === d.seconds
                  ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 border-transparent"
                  : "border-gray-300 dark:border-gray-600 hover:border-gray-500"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      {/* Timer display */}
      <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 space-y-5">
        {/* Progress bar */}
        <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gray-900 dark:bg-white rounded-full transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Timer */}
        <div className="text-center">
          <p className={`text-6xl font-mono font-bold tabular-nums ${timeLeft <= 10 && running ? "text-red-500" : ""}`}>
            {minutes > 0 ? `${minutes}:${String(seconds).padStart(2, "0")}` : `${seconds}s`}
          </p>
        </div>

        {/* Prompt */}
        <div className="text-center space-y-1">
          {running || finished ? (
            <>
              <p className="text-sm text-gray-500 dark:text-gray-400">Draw this:</p>
              <p className="text-lg font-semibold">{prompt.text}</p>
              <div className="flex justify-center gap-2 flex-wrap pt-1">
                <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 capitalize">
                  {prompt.category}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 capitalize">
                  {prompt.difficulty}
                </span>
              </div>
            </>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">Press start to get a prompt</p>
          )}
        </div>

        {finished && (
          <p className="text-center text-green-600 dark:text-green-400 font-semibold">Time&apos;s up! Nice work.</p>
        )}

        {/* Controls */}
        <div className="flex justify-center gap-3">
          {!running && !finished && (
            <button
              onClick={start}
              className="px-6 py-2.5 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Start
            </button>
          )}
          {running && (
            <>
              <button
                onClick={stop}
                className="px-6 py-2.5 border border-gray-300 dark:border-gray-600 rounded-full font-medium hover:border-gray-500 transition-colors"
              >
                Pause
              </button>
              <button
                onClick={finish}
                className="px-6 py-2.5 border border-gray-300 dark:border-gray-600 rounded-full font-medium hover:border-gray-500 transition-colors"
              >
                Done
              </button>
            </>
          )}
          {!running && (running || timeLeft < duration || finished) && (
            <button
              onClick={reset}
              className="px-6 py-2.5 border border-gray-300 dark:border-gray-600 rounded-full font-medium hover:border-gray-500 transition-colors"
            >
              Reset
            </button>
          )}
          {finished && (
            <button
              onClick={next}
              className="px-6 py-2.5 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Next prompt
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
