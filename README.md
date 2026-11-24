# Seventeen Syllables of Debugging

[![make.fun](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![Rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/Shanumameyra/one-line-haiku-debug/rank.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![Reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/Shanumameyra/one-line-haiku-debug/reward.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

One haiku about debugging, in the classic 5-7-5 syllable shape, for the
[make.fun bounty "Seventeen Syllables of Debugging"](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605).

## The haiku

> Cursor blinks at three
> the stack trace scrolls past midnight
> one semicolon

A whole night lost to a single missing semicolon — the last line turns
the poem.

## How it works

`main.ts` runs on Node 22 and writes the haiku above, exactly three lines,
to `/output/entry.txt`. The output is deterministic: the same three lines
on every run.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
