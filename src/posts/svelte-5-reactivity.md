---
title: Svelte 5 Reactivity with Runes
description: Understanding the new $state and $derived runes.
date: '2025-4-2'
categories:
  - svelte
published: true
---

Svelte 5 introduces runes — `$state`, `$derived`, and `$effect` — that make reactivity explicit and universal. Unlike Svelte 4's compiler magic, runes work the same way in `.svelte` files, `.js` modules, and even plain `.ts` files.

This unifies the mental model: any reactive value is simply a signal under the hood. Migration is gradual, with Svelte 4 components running alongside rune-based code in the same app.
