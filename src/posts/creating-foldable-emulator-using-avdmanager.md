---
title: 'Creating Foldable Emulator Using AVDManager'
description:
  'Step-by-step guide to create a foldable Android emulator using avdmanager.'
date: '2025-01-06'
categories:
  - android
  - flutter
tags:
  - android
  - emulator
  - avd
  - foldable
published: true
readingTime: '1 min'
---

## 1. Run this command to create foldable emulator using `avdmanager`

```bash
avdmanager create avd -n foldable_emulator -k "system-images;android-34;google_apis_playstore;arm64-v8a"
--device "7.6in Foldable"
```

Options:

- -n: emulator name
- -k: sdk id
- --devices: available device definitions

## 2. Modify avd configuration to simulate the main screen and enable foldable

```ini
hw.mainKeys=no
hw.keyboard=no
hw.lcd.density = 362
hw.lcd.width = 1536
hw.lcd.height = 2152

foldable = true
foldable.layout.width = 720
foldable.layout.height = 1680
foldable.bendable = true
```

## 3. Launch the avd emulator

```bash
emulator -avd foldable_emulator
```
