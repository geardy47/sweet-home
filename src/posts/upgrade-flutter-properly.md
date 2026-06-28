---
title: "Upgrade Flutter Properly"
description: "Steps to properly upgrade Flutter and update dependencies."
date: "2026-06-28"
categories:
  - flutter
published: true
readingTime: '1 min'
---

In order to stay up to date to flutter version, run this syntax.

```bash
flutter upgrade
```

Then check for outdated dependencies, use `flutter pub outdated`.

```bash
flutter clean && flutter pub get
flutter pub outdated
```

Some upgradable dependencies are locked (in pubspec.lock) to older versions. To
update these dependencies, use `flutter pub upgrade`.

```bash
flutter pub upgrade
```

Some dependencies are constrained to versions that are older than a resolvable
version. To update these dependencies, edit pubspec.yaml, or run
`flutter pub upgrade --major-versions`.

```bash
flutter pub upgrade --major-versions
```

Your current `analyzer` version may not fully support your current SDK version.

Analyzer language version: 3.1.0 SDK language version: 3.4.0

Please update to the latest `analyzer` version (6.5.0) by running
`flutter packages upgrade`.

If you are not getting the latest version by running the above command, you can
try adding a constraint like the following to your pubspec to start diagnosing
why you can't get the latest version:

```yaml
dev_dependencies:
  analyzer: ^6.5.0
```
