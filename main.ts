// Worst Superpower — make.fun entry for u-suroto-worst-superpower-461dcdbe.
//
// Writes exactly one line — the most useless superpower imaginable —
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Node 22, standard library only, no network, fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I can stop time, but only while I'm asleep \u2014 and it always restarts the exact second I wake up.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
