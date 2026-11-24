// Seventeen Syllables of Debugging — a haiku about debugging.
// Writes exactly three lines (5-7-5 syllables) to /output/entry.txt.
//
//   Cursor blinks at three                  (5: cur-sor / blinks / at / three)
//   the stack trace scrolls past midnight   (7: the / stack / trace / scrolls / past / mid-night)
//   one semicolon                           (5: one / sem-i-co-lon)
//
// The last line turns the poem: a whole night lost to a single missing
// semicolon. Deterministic output — the same three lines on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const haiku: string[] = [
  "Cursor blinks at three",
  "the stack trace scrolls past midnight",
  "one semicolon",
];

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku.join("\n"), "utf8");
