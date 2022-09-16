# Flame Graphs

## What's a flame graph useful for?

Flame graphs are a way of visualizing CPU time spent in functions. They can help you pin down where you spend too much time doing synchronous operations.

## How to create a flame graph

### Where are Flame graphs generated from?

Flame graphs are generated from `perf` output, which is not a node-specific tool.

## Use a pre-packaged tool

If you want a single step that produces a flame graph locally, try [0x](https://www.npmjs.com/package/0x)

## Create a flame graph with system perf tools

[not finished]

couldn't finish document because perf is not supported on WSL2G