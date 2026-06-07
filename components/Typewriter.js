"use client";

import { useEffect, useState } from "react";

const TYPING_SPEED = 90;
const DELETING_SPEED = 45;
const PAUSE_AFTER_TYPED = 1400;

/**
 * Cycles through `words`, typing each one out character by character,
 * pausing, then deleting it before moving to the next.
 */
export default function Typewriter({
  words = [],
  className = "",
  cursorClassName = "",
}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;
    const current = words[index];

    // Finished typing the full word — pause, then start deleting.
    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), PAUSE_AFTER_TYPED);
      return () => clearTimeout(t);
    }

    // Finished deleting — advance to the next word.
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? DELETING_SPEED : TYPING_SPEED
    );
    return () => clearTimeout(t);
  }, [subIndex, deleting, index, words]);

  return (
    <span className={className}>
      {words[index]?.substring(0, subIndex)}
      <span
        aria-hidden="true"
        className={`typewriter-cursor ml-0.5 inline-block ${cursorClassName}`}
      >
        |
      </span>
    </span>
  );
}
