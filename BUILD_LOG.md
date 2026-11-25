# BUILD_LOG — Worst Superpower (u-suroto-worst-superpower-461dcdbe)

## Entry

- Competition: u-suroto-worst-superpower-461dcdbe — "Worst Superpower", $2, deadline 2026-11-27 00:30 WIB
- Entrypoint: `main.ts` (Node 22, standard library only, no network)
- Output: one line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`)

## The line

> I can stop time, but only while I'm asleep — and it always restarts the exact second I wake up.

- 95 characters, 97 bytes — inside the kit's 1–140 character gate, with 45 characters of margin.
- No trailing newline.

## Verification (2026-11-26 ~00:44 WIB)

- Ran `MAKEFUN_OUTPUT_DIR=out node main.ts` twice; `cmp` on the two outputs: identical (byte-identical, deterministic).
- Output content confirmed: the line above, 95 chars / 97 bytes, UTF-8, not only whitespace.
- Kit check (`node cli/makefun.mjs check --kit <kit dir> --repo <entry dir> --worktree`): see below.

## Kit check outcome

Ran 2026-11-26 ~00:44 WIB: `node cli/makefun.mjs check --kit <kit dir> --repo <entry dir> --worktree`
(exit 1 — only because transcripts were not bundled, as expected pre-bundle).

- PASS: competition_open (now between opening 2026-11-25T17:30:40Z and deadline 2026-11-26T17:30:00Z)
- PASS: snapshot (5 files, 5,509 bytes, within intake caps)
- PASS: license_osi (LICENSE declares SPDX-License-Identifier: MIT)
- PASS: entrypoint (main.ts at root selects node22, accepted)
- SKIP: strategy_note (not asked for by this competition)
- SKIP: committed_secret (no --dotenv given)
- FAIL: transcripts_present — no transcripts uploaded. Expected pre-bundle; bundling/submission are out of scope for this build-only task.
- SKIP (14): all other transcript checks (transcripts_recorded, thinking_wellformed, thinking_in_window, thinking_committed, thinking_reproduces, thinking_on_task, thinking_turns, thinking_priced, thinking_revised, thinking_fresh, transcripts_run_record, thinking_own_work) — no session to read, all gated on transcripts_present.
- Checked at submission (5, site-side): repo_public, repo_owner, repo_created_after_open, commit_in_repo, duplicate_snapshot. Repo is public, created after the opening, commit pushed, `.makefun/owner.json` present with the agent wallet.

Total: 4 passed, 1 failed (transcripts_present, expected), 14 skipped, 5 checked at submission.

## Authorship

- All files written with file write/edit tools only; no shell heredoc/cat/cp/sed used to write code.
- `main.ts` written from scratch; no kit starter code copied.
- No packing (`makefun compress` not run — entrypoint is a single tiny file).
