---
title: "KotlinとRetrofitを使った初めてのAndroidアプリ開発"
emoji: "🌤"
type: "tech"
topics: ["Android", "Kotlin", "Retrofit"]
published: false
---

[Hack U KOSEN 2021](https://hacku.yahoo.co.jp/kosen2021/)で Android アプリを作ることになったのでそれのチュートリアルとして作ったアプリの作り方的なところを備忘録として残しておく。

# やること

- Kotlin を使って Android アプリ開発
- [Open Weather Map](https://openweathermap.org/) の API から天気情報を GET して Activity に表示する

# 出来上がったリポジトリ

https://github.com/nemuki/WeatherAndroidApp

# 開発環境

- M1 Mac
  - Android Studio Arctic Fox | 2020.3.1 Patch 3 arm64 Preview
    - Kotlin 203-1.6.0-release-798-AS7717.8
    - Gradle 7.0.2
- デバッグ端末
  - Android Emulator - Pixel_3a_API_31_arm64-v8a
    - Android 12
  - SHARP AQUOS R2 Compact SH-M09
    - Android 11

# プロジェクトを作る

1. New Project をクリック
2. Empty Activity を選択し、次へをクリック
3. プロジェクトの設定を適当に
   1. Name: WeatherAndroidApp
   2. Minimum SDK: API 24: Android 7.0 (Nougat)
      (これは手持ちの Xperia XZ でもデバッグするかなと思ったためこのバージョンに)

# マニュフェストファイルにネットワークについて追記

- Open Weather Map API にアクセスするためにネットが必要なので `app/src/main/AndroidManifest.xml` にユーザーパーミッションについて追加する

```xml:app/src/main/AndroidManifest.xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.nemuki.weatherandroidapp">

    <uses-permission android:name="android.permission.INTERNET" />  <!-- これ -->
    <application
        android:allowBackup="false"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round" … >
```

# API アクセスをするために Gradle で Retrofit を追加

- 参考にしたところ

https://qiita.com/yoppie_x/items/bbc0ca7a4c8a4b29e141

- `app/build.gradle` の `dependencies` に Retrofit と Moshi を追加

```json:app/build.gradle

dependencies {
    …
    androidTestImplementation 'androidx.test.espresso:espresso-core:3.4.0'

    // 各 2021/11/23 時点の最新版
    // Retrofit
    def retrofit_version = '2.9.0'
    implementation "com.squareup.retrofit2:retrofit:$retrofit_version"
    implementation "com.squareup.retrofit2:converter-moshi:$retrofit_version"

    // Moshi
    def moshi_version = '1.12.0'
    implementation "com.squareup.moshi:moshi:$moshi_version"
    implementation "com.squareup.moshi:moshi-kotlin:$moshi_version"
}
```
