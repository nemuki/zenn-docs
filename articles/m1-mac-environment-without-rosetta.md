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
- Microsoft 365
  - Word
  - Excel
  - PowerPoint
  - Outlook
  - OneNote
- Microsoft Remote Desktop
- 1Password
- Paste
- MeetingBar
- RunCat
- BetterSnapTool
  :::

:::details 普段使いのソフト

- Google Chrome
- パソコン版 Google Drive（旧: Google Drive File Stream)
- Zoom
- Tunnelblick
- Alfred
  :::

:::details 開発系ソフト

- Visual Studio Code
- JetBrains ToolBox
  - WebStorm
- iTerm2
- Xcodes
- Termius
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
- Display Menu
- OpenVPN Connect
  :::

## Mac App Store からインストールできたもの

### Slack

ワークスペースの切り替えが爆速すぎて笑っちゃうやつ
https://apps.apple.com/jp/app/slack-for-desktop/id803453959?mt=12

### Microsoft 365

学生なので欠かせない

#### Word

https://apps.apple.com/jp/app/microsoft-word/id462054704?mt=12

#### Excel

https://apps.apple.com/jp/app/microsoft-excel/id462058435?mt=12

#### PowerPoint

https://apps.apple.com/jp/app/microsoft-powerpoint/id462062816?mt=12

### Outlook

https://apps.apple.com/jp/app/microsoft-outlook/id985367838?mt=12

### Microsoft Remote Desktop

Retina のオプションを入れたら良い感じに表示できる
https://apps.apple.com/jp/app/microsoft-remote-desktop/id1295203466?mt=12

### 1Password

先日，Chrome 拡張機能がアップデートされて指紋認証がつかえるようになってうれしい 🎉
https://apps.apple.com/jp/app/1password-7-password-manager/id1333542190?mt=12

### Paste

Windows だと標準であるクリップボード履歴をみえるやつ．デザインがよい
https://apps.apple.com/jp/app/paste-clipboard-manager/id967805235

### MeetingBar

カレンダーと同期して，予定にビデオ会議の URL があればメニューバーから飛べるようになる
https://apps.apple.com/jp/app/meetingbar/id1532419400?mt=12

### RunCat

走ってる猫を見てるだけで癒される
https://apps.apple.com/jp/app/runcat/id1429033973?mt=12

### BetterSnapTool

こちらも Windows だと標準のウィンドウ管理アプリ
[PowerToys](https://github.com/microsoft/PowerToys)の FancyZone のような機能があってとてもいい
https://apps.apple.com/jp/app/bettersnaptool/id417375580?mt=12

## 普段使いのソフト

### Google Chrome

2 月の時点で対応済み 🎉
インストーラーは Intel 版と別れているので注意です．
:::details ダウンロードページの画像
![](/images/m1-mac/chrome.png)
:::
https://www.google.co.jp/chrome/

### パソコン版 Google Drive (旧: Google Drive File Stream)

最近のアップデート`v52.0`から M1 に完全サポートされるようになりました 🎉
インストーラーはユニバーサル化されています．
https://www.google.com/intl/ja_jp/drive/download/
https://support.google.com/a/answer/7577057?hl=ja

### Zoom

2 月の時点で対応済み 🎉
インストーラーは Intel 版と別れているので注意です．
:::details ダウンロードページの画像
![](/images/m1-mac/zoom.png)
:::
https://zoom.us/download#client_4meeting

### TunnelBlick

OpenVPN のクライアントソフトです．
公式の[OpenVPN Connect](https://openvpn.net/vpn-client/)が対応していなかったため，その代わりのソフトです．
Stable 版でインストーラーはユニバーサル化されています 🎉
https://tunnelblick.net/downloads.html

### SwitchResX

Mac のディスプレイ解像度を自由に変更できるようになるソフトです．
Mac App Store にある[Display Menu](https://apps.apple.com/jp/app/display-menu/id549083868?mt=12)が対応していなかったためこちらをインストール．
インストーラーはユニバーサル化されています 🎉
https://www.madrau.com/srx_download/download.html

### Alfred

Spotlight の強化版的なさむしんぐです．
Mac App Store にもありますが，そちらは更新がされてないようで公式サイトのインストーラーからインストールしました．
インストーラーはユニバーサル化されています 🎉
https://www.alfredapp.com/

## 開発系ソフト

### Visual Studio Code

2 月は Insider 版でしたが，既に正式対応しています
インストーラーはユニバーサル化されています 🎉
https://code.visualstudio.com/download

### JetBrains ToolBox

[GitHub Student Developer Pack](https://education.github.com/pack)でライセンスを頂いています．
インストーラーは Intel 版と別れているので注意です．
:::details ダウンロードページの画像
![](/images/m1-mac/jetbrains-toolbox.png)
:::
https://www.jetbrains.com/ja-jp/toolbox-app/

#### WebStorm

フロントエンド(React)を書くように Toolbox からインストール．
https://www.jetbrains.com/ja-jp/webstorm/

### Xcodes

Xcode のバージョン管理ソフトです．複数の Xcode をインストールするのが簡単になります．
https://github.com/RobotsAndPencils/XcodesApp/releases/

### Termius

マルチプラットフォーム対応の SSH クライアント
ホストやログイン情報の共有，ローカルポートフォワードや SFTP クライアントまで内蔵しています．
こちらも [GitHub Student Developer Pack](https://education.github.com/pack) で Premium アカウントが無料で使えます．
https://apps.apple.com/jp/app/termius-ssh-client/id1176074088?mt=12
