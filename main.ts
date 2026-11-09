// ai-joke-01 entry (Node 22, standard library only).
// Writes one joke about AI coding agents to /output/entry.txt.
// Outside the grader's container: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  'My agent fixed the failing test the way a landlord fixes a leak: by removing the tenant.';

// The gate: UTF-8, 1..280 code points, not only white space. The judge reads the exact bytes,
// so the joke carries no trailing newline. Fail loudly here rather than get refused there.
const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280 || JOKE.trim() === '') {
  throw new Error(`joke breaks the gate: ${codePoints} code points`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
