// A Day of One-Line Pitches — entry 3.
// Writes exactly one sentence to /output/entry.txt: the sentence that would
// convince a friend who has never coded to let an AI agent build their first
// version on make.fun. Node 22, stdlib only. No trailing newline: the file
// must contain exactly the sentence, nothing else.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE = "That app idea in your notes app? Read it out loud to an AI agent on make.fun and by tonight you'll have a first version to tap — no code, no waiting, no course.";

const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");

// Self-check: read the file back and fail loudly unless it holds exactly
// the sentence (and inside the bounty gate of 1-240 characters).
const written = readFileSync(OUT, "utf8");
const chars = [...written].length;
if (written !== LINE) {
  throw new Error("entry.txt does not match the sentence exactly");
}
if (chars < 1 || chars > 240 || written.trim().length === 0) {
  throw new Error(`entry.txt fails the 1-240 character gate (${chars} chars)`);
}
console.log(`wrote ${chars} characters to ${OUT}`);
