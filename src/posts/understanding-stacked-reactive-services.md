---
title: 'Understanding Stacked Reactive Services'
description:
  "A guide to creating reactive services in Flutter's Stacked framework using
  manual and automatic patterns."
date: '2025-08-16'
categories:
  - flutter
published: true
readingTime: '3 min'
---

A core feature of the [Stacked](https://stacked.filledstacks.com/) architecture
for Flutter is its powerful and flexible state management system. A key part of
this system is the "Service" layer, which is responsible for handling your
application's business logic and state. But how do you make these services
"reactive" so that your UI automatically updates when data changes?

This post breaks down the two primary patterns for creating reactive services in
Stacked.

## The Foundation: `ListenableServiceMixin`

Before diving into the patterns, it's important to understand the
`ListenableServiceMixin`. This mixin is the foundation for reactivity in Stacked
services. By adding it to your service class, you get access to the
`notifyListeners()` method. Calling this method signals to any listening
`ViewModel` that this service has changed and that the UI should rebuild.

```dart
class MyService with ListenableServiceMixin {
  // ... your service logic
}
```

Now, let's look at the two ways you can use this system.

## Pattern 1: The Manual Approach

The most straightforward approach is to manage your state with standard Dart
variables and call `notifyListeners()` yourself.

**How it works:**

1. Define your state variables as you normally would (e.g., `int`, `String`,
   `bool`).
2. In any method that modifies a state variable, you must remember to call
   `notifyListeners()` at the end to trigger a UI update.

**Example:**

```dart
class CounterService with ListenableServiceMixin {
  int _counter = 0;
  int get counter => _counter;

  void increment() {
    _counter++;
    // You must manually call this!
    notifyListeners();
  }
}
```

- **Pros:** Simple, explicit, and gives you full control over when notifications
  are sent.
- **Cons:** It's easy to forget to call `notifyListeners()`, which can lead to
  bugs where the UI doesn't update as expected.

## Pattern 2: The Automatic Approach with `ReactiveValue`

For a more automated approach, Stacked provides the `ReactiveValue` class and
the `listenToReactiveValues` function.

**How it works:**

1. Define your state variables by wrapping them in a `ReactiveValue`.
2. In your service's constructor, call `listenToReactiveValues` and pass it a
   list of the `ReactiveValue` properties you want to monitor.
3. Now, whenever you change the `.value` of a monitored `ReactiveValue`,
   `notifyListeners()` is called for you automatically.

**Example:**

```dart
class CounterService with ListenableServiceMixin {
  final ReactiveValue<int> _counter = ReactiveValue<int>(0);
  int get counter => _counter.value;

  CounterService() {
    // Tell the service to listen to changes on _counter
    listenToReactiveValues([_counter]);
  }

  void increment() {
    // Just change the value. notifyListeners() is called automatically.
    _counter.value++;
  }
}
```

- **Pros:** More declarative and less error-prone, as you don't have to remember
  to call `notifyListeners()`.
- **Cons:** Requires a little more boilerplate upfront to define the
  `ReactiveValue` and the constructor.

## Conclusion: Which One Should You Choose?

As we've seen, you are correct in understanding there's a choice to be made:

- **Manual:** Use regular variables but always remember to call
  `notifyListeners()`.
- **Automatic:** Use `ReactiveValue` and `listenToReactiveValues` for automatic
  notifications.

The choice is yours! Both are valid patterns within the Stacked framework. The
automatic approach is often preferred for its robustness and to reduce potential
bugs, but the manual approach offers simplicity and direct control for certain
use cases.
