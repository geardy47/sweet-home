---
title: 'Generate public certificates in flutter'
description: 'How to generate public certificates for Android and iOS in Flutter using keytool and Keychain Access.'
date: '2023-08-08'
categories:
  - flutter
published: true
readingTime: '1 min'
---

## Android public certificates

To generate a public certificate (`.pem`) from your upload key, use the
`keytool` utility. You can find more information about `keytool` here.

```bash
keytool -export -rfc -keystore ~/.android/debug.keystore \
-alias androiddebugkey -file raya_public_certificates.pem
```

Check if your certificate valid or not

```bash
openssl x509 -noout -text -inform PEM -in raya_public_certificates.pem
```

Next, convert the certificate to the appropriate format, which in this case is a
`.der` file.

```bash
openssl x509 -outform der -in raya_public_certificates.pem -out raya_public_certificates.der
```

Check again your certificate

```bash
openssl x509 -noout -text -inform DER -in raya_public_certificates.der
```

For more information on how to convert to the appropriate format, click here.

## iOS public certificates

1. On your Mac, open the Keychain Access app.
2. Look for the specific file that is used to sign the iOS IPA file. There are
   various certificates for different setups. In the example that follows, the
   iPhone Developer: XXX certificate
3. Right-click on the certificate and select Export "iPhone Developer: XXX".
4. Make sure you set the File Format to Certificate (.cer).
