# STASIS APK project

1. Copy your game file to `www/index.html` (replace the placeholder).
2. Build the APK, using ONE of the two ways below.

## A) No installs: GitHub builds it for you
1. Create a free GitHub account and a new repository.
2. Upload ALL files of this folder (including the hidden `.github` folder).
3. Open the repo > Actions tab > "Build APK" > wait ~5 minutes.
4. Open the finished run > Artifacts > download `STASIS-apk` > unzip > `app-debug.apk`.
5. Send the APK to your phone and install it (allow "install unknown apps").

## B) On your computer (Node.js 20 + Android Studio)
    npm install
    node prepare.js
    npx cap add android
    (add android:screenOrientation="sensorLandscape" to <activity> in android/app/src/main/AndroidManifest.xml)
    npx cap sync android
    npx cap open android      -> Build > Build APK(s)

Change `appId` in capacitor.config.json to your own, e.g. com.yourname.stasis.
