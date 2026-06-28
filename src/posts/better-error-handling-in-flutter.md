---
title: 'Better Error Handling In Flutter'
description:
  'How to avoid NoSuchMethodError when returning nullable response data in
  try-catch blocks with Dio.'
date: '2026-05-12'
categories:
  - flutter
tags:
  - flutter
  - dart
  - dio
  - error-handling
published: true
readingTime: '1 min'
---

```bash
Unhandled Exception: NoSuchMethodError: The method '[]' was
called on null.
```

In order to avoid getting an error like above when returning nullable
`response data (Map<String, dynamic>)` in `try catch`, try making the access
conditional (using '?.' in the invocation).

```dart
final dio = Dio(BaseOptions(baseUrl: 'http://localhost:3000'));

Future<dynamic> fetch() async {
 try {
  final response = await dio.get<Map<String, dynamic>>('/error');

  if (response.statusCode == 200) {
   return response.data;
  }
 } on DioException catch (e) {
  return e.response?.data?['error']['code'] ??
    'Error ${e.response?.statusCode}';
 }
}
```
