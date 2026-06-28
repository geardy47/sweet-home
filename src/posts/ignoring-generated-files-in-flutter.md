---
title: 'Ignoring generated files in flutter'
description: 'How to properly ignore and untrack generated files in Flutter projects using .gitignore.'
date: '2023-09-06'
categories:
  - flutter
tags:
  - flutter
  - dart
  - gitignore
  - generated-files
published: true
readingTime: '1 min'
---

## Add files & extensions inside .gitignore

```
/lib/application/app/app.router.dart
/lib/application/app/app.locator.dart
*.g.dart
*.freezed.dart
```

## Untrack the files

If you want to ignore a file that is already checked in, you must untrack the
file before you add a rule to ignore it. From your terminal, untrack the file.

```bash
git rm --cached --ignore-unmatch lib/application/app/app.router.dart
git rm --cached --ignore-unmatch lib/application/app/app.locator.dart
git rm --cached --ignore-unmatch test/_helpers/test_setup.mocks.dart
find . -name '*.g.dart' -exec git rm --cached --ignore-unmatch {} \;
find . -name '*.freezed.dart' -exec git rm --cached --ignore-unmatch {} \;
```
