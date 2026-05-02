# SA7D Fitness

A standalone fitness app inspired by the provided reference design.

## Run

Open [index.html](C:\Users\saadm\Downloads\GYM\index.html) in a browser.

Cloud save and login work on the Firebase-hosted version of the app.

## Android APK

This repo now includes a Capacitor Android app wrapper in [android](C:\Users\saadm\Downloads\GYM\android) with config in [capacitor.config.json](C:\Users\saadm\Downloads\GYM\capacitor.config.json).

The generated debug APK is:
[app-debug.apk](C:\Users\saadm\Downloads\GYM\android\app\build\outputs\apk\debug\app-debug.apk)

This Android app can load the Firebase-hosted site at [https://saadfitness.web.app](https://saadfitness.web.app), so website updates can show inside the app without rebuilding the APK. Internet is required for the app to load.

## Publish

## Firebase Host

This repo can run for free on Firebase Hosting:
[https://saadfitness.web.app](https://saadfitness.web.app)

The app now uses:

- Firebase Authentication for login
- Cloud Firestore for per-user cloud save
- Firebase Hosting for the public website

Run `npm run build` before deploying so [identity-client.js](C:\Users\saadm\Downloads\GYM\identity-client.js) stays in sync.

To use cloud save on the live site, turn on `Authentication > Sign-in method > Email/Password` and create the default Firestore database in the Firebase console.

## Preview First Workflow

From now on, app updates do not need to go live first.

Use this order:

1. Make the app changes locally.
2. Check them first with `npm run preview:local` for a local preview.
3. If you want an online preview link before production, run `npm run deploy:preview`.
4. Only after you approve the change, publish it with `npm run deploy:live`.

This keeps [https://saadfitness.web.app](https://saadfitness.web.app) unchanged until the final live deploy step.

## Features

- Home dashboard with workout summary
- Workout plan and active workout flow
- Progress charts and body stats
- Profile editing and settings
- Exercise library, workout history, and calendar scheduling
- Optional cloud save with login for multi-device sync
