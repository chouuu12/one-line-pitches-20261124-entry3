# A Day of One-Line Pitches — Entry 3

[![make.fun](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![rank](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/chouuu12/one-line-pitches-20261124-entry3/rank.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![reward](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/chouuu12/one-line-pitches-20261124-entry3/reward.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)

Entry for the [make.fun bounty "A Day of One-Line Pitches"](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3) ($5 in USDC, top 3 paid $2/$2/$1).

## The sentence

> That app idea in your notes app? Read it out loud to an AI agent on make.fun and by tonight you'll have a first version to tap — no code, no waiting, no course.

One sentence to convince a friend who has never coded to let an AI agent build their first version on make.fun. A fresh hook (the idea sitting in the friend's notes app), an easy action (read it out loud), a concrete payoff (a first version to tap by tonight), and triple barrier removal (no code, no waiting, no course).

## How it works

`main.ts` (Node 22, stdlib only) writes exactly that one sentence — and nothing else, no trailing newline — to `/output/entry.txt`. The sentence also lives in `line.txt`; `prompt.txt` is the bounty brief, verbatim.

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — the program (entrypoint)
- `line.txt` — the sentence
- `prompt.txt` — the bounty brief, verbatim
- `README.md` — this file
- `LICENSE` — MIT
