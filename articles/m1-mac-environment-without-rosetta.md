---
title: "絶対にRosetta 2を入れてはいけないM1 Mac環境構築 2021 10月末編"
emoji: "💻"
type: "tech"
topics: ["Apple", "M1", "Rosetta2", "環境構築"]
published: false
---

先日，Apple の発表会で新型 MacBook Pro が発表され，見ていた僕はそのすぐ後から予約開始ということで最小構成の 14 インチ MacBook Pro を予約・購入しました．
それが 10 月 29 日(金)に届いたのでとりあえず Rosetta 2 を使わずに環境構築をしてみました．
https://zenn.dev/hinastory/articles/71983c4ac8aa2d
先人がいるのは知っていますが，2 月に比べるとできることが多くなっているので楽しんでいただけるかと思います．

## 検証したソフト

:::details Mac App Store からインストールできたもの

- Slack
- Zoom
- Microsoft Office
  - Word
  - Excel
  - PowerPoint
- Microsoft Remote Desktop
- 1Password
- Paste
- MeetingBar
- RunCat
- BetterSnapTool
- Termius
  :::

:::details 普段使いのソフト

- Google Chrome
- パソコン版 Google Drive（旧: Google Drive File Stream)
- Tunnelblick
- Alfred
  :::

:::details 開発系ソフト

- Visual Studio Code
- JetBrains ToolBox
  - WebStorm
- iTerm2
- Xcodes
  :::

:::details 開発環境

- Homebrew
- Starship
- n
  - Node.js(npm, npx)
- anyenv(pyenv)
- Python3
  - pip3
  - pipenv
- ghq
- peco
  :::

:::details 残念ながら未対応だったもの

- Google 日本語入力
- OneDrive
- OBS Studio
- OpenVPN Connect
  :::

## 普段使いのソフト

### Google Chrome

2 月の時点で対応済み 🎉
インストーラーは Intel 版と別れているので注意です．
![](/images/m1-mac/chrome.png)
https://www.google.co.jp/chrome/

### パソコン版 Google Drive (旧: Google Drive File Stream)

最近のアップデート`v52.0`から M1 に完全サポートされるようになりました 🎉
インストーラーはユニバーサル化されています．
https://www.google.com/intl/ja_jp/drive/download/
https://support.google.com/a/answer/7577057?hl=ja

### TunnelBlick

OpenVPN のクライアントソフトです．
公式の[OpenVPN Connect](https://openvpn.net/vpn-client/)が対応していなかったため，その代わりのソフトです．
Stable 版でインストーラーはユニバーサル化されています 🎉
https://tunnelblick.net/downloads.html

### Alfred

Spotlightの強化版的なさむしんぐです．
Mac App Storeにもありますが，そちらは更新がされてないようで公式サイトのインストーラーからインストールしました．
インストーラーはユニバーサル化されています 🎉
https://www.alfredapp.com/