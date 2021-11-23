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
- Open Weather Map の [Current weather data](https://openweathermap.org/current) から天気情報を GET して Activity に表示する

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
3. プロジェクトの設定を適当に選択して Finish をクリック
   1. Name: WeatherAndroidApp
   2. Minimum SDK: API 24: Android 7.0 (Nougat)
      (これは手持ちの Xperia XZ でもデバッグするかなと思ったためこのバージョンに)

# 開発準備

## マニュフェストファイルにネットワークについて追記

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

## API アクセスをするために Gradle で Retrofit を追加

- 参考にしたサイト

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

# いざ開発

## API から JSON を受け取ったときにオブジェクト化するためのクラスを追加

- Open Weather Map API からは以下のようなフォーマットで天気データが送られてくる

:::details Open Weather Map API のレスポンス

```json:response
{
    "coord": {
        "lon": 134.5594,
        "lat": 34.0658
    },
    "weather": [
        {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 7.97,
        "feels_like": 7.29,
        "temp_min": 7.96,
        "temp_max": 10.79,
        "pressure": 1013,
        "humidity": 66
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.54,
        "deg": 20
    },
    "clouds": {
        "all": 75
    },
    "dt": 1637673400,
    "sys": {
        "type": 1,
        "id": 8027,
        "country": "JP",
        "sunrise": 1637617309,
        "sunset": 1637654083
    },
    "timezone": 32400,
    "id": 1850158,
    "name": "Tokushima",
    "cod": 200
}
```

:::

- これ用に data class を作成する

> これって毎回必要になってくるんだろうか…

```kotlin:WeatherInfo.kt
package com.nemuki.weatherandroidapp

data class WeatherInfo(
    val coord: Coord,
    val weather: List<Weather>,
    val base: String,
    val main: Main,
    val visibility: Int,
    val wind: Wind,
    val clouds: All,
    val dt: Int,
    val sys: Sys,
    val timezone: Int,
    val id: Int,
    val name: String,
    val cod: Int
)

data class Coord(
    val lon: Double,
    val lat: Double
)

data class Weather(
    val id: Int,
    val main: String,
    val description: String,
    val icon: String
)

data class Main(
    val temp: Double,
    val feels_like: Double,
    val temp_min: Double,
    val temp_max: Double,
    val pressure: Int,
    val humidity: Int
)

data class Wind(
    val speed: Double,
    val deg: Int
)

data class All(
    val all: Int
)

data class Sys(
    val type: Int,
    val id: Int,
    val country: String,
    val sunrise: Int,
    val sunset: Int
)

```

## RefrofitでGETアクセスをするためにインターフェースを作成

- Open Weather Map の [Current weather data](https://openweathermap.org/current) API のアクセスURLは `api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}` 
- ドメイン以下のパスをGETアノテーションの引数にわたすのでこの場合は `data/2.5/weather/` を渡す
  - GETのパラメーターが必要な場合は `@Query` オプションで指定できる

```kotlin:WeatherService.kt
package com.nemuki.weatherandroidapp

import retrofit2.Call
import retrofit2.http.GET
import retrofit2.http.Query

interface WeatherService {
    @GET("data/2.5/weather/")
    fun fetchWeather(
        @Query("q") cityName: String,
        @Query("appid") apiKey: String,
        @Query("units") units: String
    ): Call<WeatherInfo>
} 
```
