import { mkdirSync, writeFileSync } from "node:fs";

// Seventeen Syllables of Debugging — one haiku about debugging, 5-7-5.
// Line 1 (5): The(1) break-point(2) holds(1) still(1)
// Line 2 (7): a(1) log(1) line(1) scrolls(1) past(1) mid-night(2)
// Line 3 (5): and(1) the(1) bug(1) was(1) me(1)
const haiku = [
  "The breakpoint holds still",
  "a log line scrolls past midnight",
  "and the bug was me",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku + "\n", "utf8");
