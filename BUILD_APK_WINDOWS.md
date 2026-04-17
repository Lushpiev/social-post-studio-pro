# Сборка APK на Windows

В этом окружении финальный `.apk` не был собран, потому что отсутствуют Android SDK / build-tools и нет доступа к npm registry для установки Capacitor-зависимостей.

## Что уже готово
- webapp
- capacitor.config.ts
- package.json
- appId: `com.lutoys.telegramautopost`

## Сборка на Windows
1. Установить Node.js LTS
2. Установить Android Studio
3. В Android Studio установить Android SDK, Platform Tools, Build Tools, Android 14/15 SDK
4. В папке проекта выполнить:
   ```bash
   npm install
   npx cap add android
   npx cap sync android
   npx cap open android
   ```
5. В Android Studio:
   - Build -> Build APK(s)

## Почему не хранить bot token в APK
Токен, зашитый в APK, можно извлечь. Лучше хранить его на backend и отправлять запросы к backend.
