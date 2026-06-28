---
title: "Flutter Build Runner Behaviour"
description: "Understanding how Flutter build runner behaves with different build configs and how to speed up generation."
date: "2026-04-20"
categories:
  - flutter
published: true
---

Each build config will treated as a separate build script entirely. So, when
using different build config, will determine previously generated output as
invalid and deletes it.

> It only deletes previously generated output if we determine the entire build
> is invalid. This usually is a result of either a change to the build script
> itself, an sdk update, or something similar.
>
> - [Jake Mac](https://github.com/dart-lang/build/issues/3443#issuecomment-1405407566)

---

> Treating different configurations as entirely independent builds could end up
> allowing a simpler mental model and lead to less confusion overall.
>
> - [Nate Bosch](https://github.com/dart-lang/build/issues/3553#issuecomment-1670360384)

Also, build runner will scan the entire file inside the project folder in order
to generate output. This make generating proccess take so much time (7-10 mins
in large project). To accelerates its process, try to specify which folder that
builder need to scan in `build.yaml` file. For example:

```yaml
targets:
  $default:
    builders:
      freezed:
        generate_for:
          - lib/application/models/**.dart
      json_serializable:
        generate_for:
          - lib/application/models/**.dart
      mockito:mockBuilder:
        generate_for:
          - test/**.dart
      stacked_generator:stackedRouterGenerator:
        generate_for:
          - lib/application/app/app.dart
      stacked_generator:stackedLocatorGenerator:
        generate_for:
          - lib/application/app/app.dart
      stacked_generator:stackedFormGenerator:
        enabled: false
      stacked_generator:stackedLoggerGenerator:
        enabled: false
      stacked_generator:stackedDialogGenerator:
        generate_for:
          - lib/ui/customs/custom_dialog/**.dart
      stacked_generator:stackedBottomsheetGenerator:
        generate_for:
          - lib/ui/customs/custom_bottom_sheets/**.dart
```
