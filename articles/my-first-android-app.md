---
title: "KotlinとRetrofitを使った初めてのAndroidアプリ開発"
emoji: "🌤"
type: "tech"
topics: ["Android", "Kotlin", "Retrofit"]
published: false
---

[Hack U KOSEN 2021](https://hacku.yahoo.co.jp/kosen2021/)で Android アプリを作ることになったのでそれのチュートリアルとして作ったアプリの作り方的なところを備忘録として残しておく。

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
