---
title: Flutter Performance Tips
description: Quick tips to keep Flutter apps smooth at 60fps.
date: '2024-3-22'
categories:
  - flutter
published: true
---

Flutter's rendering pipeline is fast by default, but it's easy to introduce jank
if you're not careful with widget rebuilds. Use `const` constructors wherever
possible to avoid unnecessary rebuilds, and lean on `RepaintBoundary` to isolate
expensive subtrees.

For lists, always reach for `ListView.builder` instead of rendering every child
upfront — it only builds visible items. Profile with the Flutter DevTools
timeline to catch shader compilation spikes on first run.
