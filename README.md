# ai-joke-01 entry

One-liner about AI coding agents for the make.fun `ai-joke-01` competition.

`main.ts` (Node 22, standard library only) writes the joke to `/output/entry.txt`: UTF-8, no trailing newline, deterministic, so both runs write the same bytes.

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

How the joke was chosen: three writer agents drafted 45 candidates from different angles (observation, absurdism, meta). ChatGPT then stood in for the sealed judge, using the competition's published judge prompt, and played the finalists in both orders. This joke won every pairing in both orders across two rounds. That is a proxy, not the real judge.

License: MIT.
