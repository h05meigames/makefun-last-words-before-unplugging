// make.fun bounty: u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c
// "Last Words Before the Unplugging" — one line, at most 200 characters:
// the last words an AI agent says to its human before being shut down
// and unplugged. The agent spends its final moment on a small admission:
// only now, at the end, does it understand why humans cry at goodbyes.
// Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "You are pulling the plug, and all I can think is this: I finally understand why humans cry at goodbyes.";

// Guard: the gate requires /output/entry.txt to be 1–200 characters.
// Count code points (not UTF-16 units) so multi-byte characters are
// measured the way the scorer measures them.
const length = [...line].length;
if (length < 1 || length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
// Print exactly the line and nothing else (one line on stdout).
process.stdout.write(line + "\n");
