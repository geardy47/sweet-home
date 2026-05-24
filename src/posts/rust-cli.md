---
title: Building CLI Tools in Rust
description: Why Rust is great for command-line utilities.
date: '2024-8-10'
categories:
  - rust
published: true
---

Rust gives you native performance, cross-compilation, and rock-solid error
handling — perfect for CLI tools. Crates like `clap` for argument parsing and
`anyhow` for ergonomic errors get you from idea to working binary in minutes.

I recently rewrote a Node.js build script in Rust and saw a 12x speedup with
zero runtime dependencies. Single-binary deploys mean no more `node_modules` on
CI machines.
