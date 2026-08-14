"use client";

import { useEffect, useRef, useState } from "react";

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch("/assets/music.mp3", { method: "HEAD" })
      .then((r) => {
        if (!cancelled) setAvailable(r.ok);
      })
      .catch(() => undefined);

    return () => {
      cancelled = true;
    };
  }, []);

  if (!available) return null;

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    audio.volume = 0.4;
    void audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }

  return (
    <>
      <audio ref={audioRef} src="/assets/music.mp3" loop preload="none" />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Tắt nhạc" : "Bật nhạc"}
        className="fixed right-4 bottom-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[#e0c9a8]/40 bg-[#351218]/80 text-[#e0c9a8] backdrop-blur transition-colors hover:border-[#e0c9a8] sm:right-6 sm:bottom-6"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M9 18V5l10-2v13" />
          <circle cx="6.5" cy="18" r="2.5" />
          <circle cx="16.5" cy="16" r="2.5" />
          {!playing && <path d="M3 3l18 18" />}
        </svg>
      </button>
    </>
  );
}
