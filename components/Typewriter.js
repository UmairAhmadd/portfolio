"use client";

import { useEffect, useState } from "react";

/**
 * Cycles through `words` forever: types each one out character by character,
 * pauses, deletes it, pauses again, then moves to the next word and repeats.
 * With a single word it simply types/deletes that word in a loop.
 */
export default function Typewriter({
  words = [],
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseAfterTyped = 1400,
  pauseAfterDeleted = 400,
  className = "",
  cursorClassName = "",
}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;
    const current = words[index];

    // Done typing — hold the full word, then start deleting.
    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pauseAfterTyped);
      return () => clearTimeout(t);
    }

    // Done deleting — hold empty, then advance to the next word and retype.
    if (deleting && subIndex === 0) {
      const t = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }, pauseAfterDeleted);
      return () => clearTimeout(t);
    }

    const t = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(t);
  }, [
    subIndex,
    deleting,
    index,
    words,
    typingSpeed,
    deletingSpeed,
    pauseAfterTyped,
    pauseAfterDeleted,
  ]);

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
