---
title: Design Systems at Scale
description: Lessons from maintaining a shared component library.
date: '2023-11-5'
categories:
  - design
published: true
---

A design system is only as good as its adoption. We found that co-locating component code with design tokens in a single monorepo package cut contribution friction in half.

Version everything — tokens, icons, and components each get their own changelog. Teams can upgrade piecemeal without waiting for a monolithic release train.
