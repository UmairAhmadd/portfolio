"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Types a sequence of styled segments once, character by character, and then
 * leaves the text in place. Calls `onDone` a single time when finished.
 *
 * `segments` is an array of either:
 *   { text: "Hi", className: "..." }   — typed out
 *   { break: true }                    — a hard line break (rendered immediately)
 */
export default function TypeOnce({
  segments = [],
  speed = 85,
  showCursor = true,
  cursorClassName = "",
  onDone,
  className = "",
}) {
  const fullLength = segments.reduce(
    (n, seg) => n + (seg.break ? 0 : seg.text.length),
    0
  );
  const [count, setCount] = useState(0);
  const done = count >= fullLength;
  const firedDone = useRef(false);

  useEffect(() => {
    if (done) return;
    const t = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(t);
  }, [count, done, speed]);

  useEffect(() => {
    if (done && !firedDone.current) {
      firedDone.current = true;
      onDone?.();
    }
  }, [done, onDone]);

  let remaining = count;

  return (
    <span className={className}>
      {segments.map((seg, i) => {
        if (seg.break) return <br key={i} />;
        const take = Math.max(0, Math.min(seg.text.length, remaining));
        remaining -= seg.text.length;
        return (
          <span key={i} className={seg.className}>
            {seg.text.substring(0, take)}
          </span>
        );
      })}
      {showCursor && !done && (
        <span
          aria-hidden="true"
          className={`typewriter-cursor ml-0.5 inline-block ${cursorClassName}`}
        >
          |
        </span>
      )}
    </span>
  );
}
