# Deno Benchmark Results

## Async Hello World
| Benchmark | time/iter (avg) | iter/s | (min … max) | p75 | p99 | p995 |
|-----------|-----------------|--------|-------------|-----|-----|------|
| async hello world | 134.9 ns | 7,414,000 | (126.9 ns … 234.5 ns) | 135.2 ns | 194.9 ns | 221.0 ns |

## Math Operation
| Benchmark | time/iter (avg) | iter/s | (min … max) | p75 | p99 | p995 |
|-----------|-----------------|--------|-------------|-----|-----|------|
| Math operation | 322.8 ns | 3,098,000 | (320.2 ns … 350.7 ns) | 322.5 ns | 347.9 ns | 350.7 ns |

## Timing Comparison
| Benchmark | time/iter (avg) | iter/s | (min … max) | p75 | p99 | p995 |
|-----------|-----------------|--------|-------------|-----|-----|------|
| Date.now() | 39.6 ns | 25,260,000 | (38.8 ns … 68.4 ns) | 39.2 ns | 47.4 ns | 54.9 ns |
| performance.now() | 602.8 ns | 1,659,000 | (597.0 ns … 623.8 ns) | 604.8 ns | 623.8 ns | 623.8 ns |

**Summary:**
- Date.now(): 15.23x faster than performance.now()

## URL Parsing
| Benchmark | time/iter (avg) | iter/s | (min … max) | p75 | p99 | p995 |
|-----------|-----------------|--------|-------------|-----|-----|------|
| URL parsing | 430.8 ns | 2,321,000 | (422.7 ns … 467.0 ns) | 433.5 ns | 461.5 ns | 467.0 ns |

## String Operations
| Benchmark | time/iter (avg) | iter/s | (min … max) | p75 | p99 | p995 |
|-----------|-----------------|--------|-------------|-----|-----|------|
| hello world #1 | 433.1 ns | 2,309,000 | (423.0 ns … 470.4 ns) | 435.8 ns | 465.4 ns | 470.4 ns |
| helloWorld3 | 490.3 ns | 2,040,000 | (421.1 ns … 2.7 µs) | 450.8 ns | 1.7 µs | 2.7 µs |
| hello world #2 | 522.7 ns | 1,913,000 | (420.9 ns … 2.5 µs) | 498.5 ns | 1.8 µs | 2.5 µs |
