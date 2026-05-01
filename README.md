# SA7D Fitness

A standalone fitness app inspired by the provided reference design.

## Run

Open [index.html](C:\Users\saadm\Downloads\GYM\index.html) in a browser.

Cloud save and login only work on the deployed Netlify site, because they use Netlify Identity and Netlify Functions.

## Android APK

This repo now includes a Capacitor Android app wrapper in [android](C:\Users\saadm\Downloads\GYM\android) with config in [capacitor.config.json](C:\Users\saadm\Downloads\GYM\capacitor.config.json).

The generated debug APK is:
[app-debug.apk](C:\Users\saadm\Downloads\GYM\android\app\build\outputs\apk\debug\app-debug.apk)

This Android app loads the live site at [https://sa7dfitness.netlify.app](https://sa7dfitness.netlify.app), so website updates can show inside the app without rebuilding the APK. Internet is required for the app to load.

## Publish

The app now uses:

- Netlify Identity for login
- Netlify Functions for cloud save
- Netlify Blobs for per-user backup storage

For GitHub-connected Netlify deploys, the repo includes [netlify.toml](C:\Users\saadm\Downloads\GYM\netlify.toml) and will run `npm run build` automatically.

To use cloud save on the live site, turn on `Identity` in the Netlify project dashboard.

## Features

- Home dashboard with workout summary
- Workout plan and active workout flow
- Progress charts and body stats
- Profile editing and settings
- Exercise library, workout history, and calendar scheduling
- Optional cloud save with login for multi-device sync
