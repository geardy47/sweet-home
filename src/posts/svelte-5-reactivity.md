---
title: Svelte 5 Reactivity with Runes
description: Understanding the new $state and $derived runes.
date: '2025-4-2'
categories:
  - svelte
published: true
---

Svelte 5 introduces runes — `$state`, `$derived`, and `$effect` — that make
reactivity explicit and universal. Unlike Svelte 4's compiler magic, runes work
the same way in `.svelte` files, `.js` modules, and even plain `.ts` files.

This unifies the mental model: any reactive value is simply a signal under the
hood. Migration is gradual, with Svelte 4 components running alongside
rune-based code in the same app.

## Basic Counter with Runes

```svelte
<script>
 let count = $state(0);
 let doubled = $derived(count * 2);

 $effect(() => {
  console.log(`Count changed to ${count}`);
 });
</script>

<button onclick={() => count++}>
 Count: {count} (doubled: {doubled})
</button>
```

## TypeScript Utility with Runes

```ts
// reactivity.ts — runes work outside .svelte files
function createTimer() {
 let elapsed = $state(0);
 let running = $state(false);
 let interval: ReturnType<typeof setInterval>;

 function start() {
  running = true;
  interval = setInterval(() => elapsed++, 1000);
 }

 function stop() {
  running = false;
  clearInterval(interval);
 }

 return {
  get elapsed() {
   return elapsed;
  },
  get running() {
   return running;
  },
  start,
  stop
 };
}
```
