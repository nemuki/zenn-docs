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
- SwitchResX
- Alfred
  :::

:::details 開発系ソフト

- Visual Studio Code
- JetBrains ToolBox
  - WebStorm
- iTerm2
- Xcodes
- Termius
- StopLight Studio
  :::

:::details 開発環境

- Homebrew
- Starship
- n
  - Node.js(npm, npx)
- anyenv
- Python3
  - pip3
  - pipenv
- ghq・peco
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

ワークスペースの切り替えが爆速すぎて笑っちゃうやつ．
https://apps.apple.com/jp/app/slack-for-desktop/id803453959?mt=12

### Microsoft 365

学生なので欠かせないソフトです．

#### Word

https://apps.apple.com/jp/app/microsoft-word/id462054704?mt=12

#### Excel

https://apps.apple.com/jp/app/microsoft-excel/id462058435?mt=12

#### PowerPoint

https://apps.apple.com/jp/app/microsoft-powerpoint/id462062816?mt=12

### Outlook

https://apps.apple.com/jp/app/microsoft-outlook/id985367838?mt=12

### OneNote

https://apps.apple.com/jp/app/microsoft-onenote/id784801555?mt=12

### Microsoft Remote Desktop

Retina のオプションを入れたら良い感じに表示できる．
https://apps.apple.com/jp/app/microsoft-remote-desktop/id1295203466?mt=12

### 1Password

先日，Chrome 拡張機能がアップデートされて指紋認証がつかえるようになってうれしい 🎉
https://apps.apple.com/jp/app/1password-7-password-manager/id1333542190?mt=12

### Paste

Windows だと標準であるクリップボード履歴を記録してくれる．
デザインがよい．
https://apps.apple.com/jp/app/paste-clipboard-manager/id967805235

### MeetingBar

カレンダーと同期して，予定にビデオ会議の URL があればメニューバーから飛べるようになる．
https://apps.apple.com/jp/app/meetingbar/id1532419400?mt=12

### RunCat

走ってる猫を見てるだけで癒される．
https://apps.apple.com/jp/app/runcat/id1429033973?mt=12

### BetterSnapTool

こちらも Windows だと標準のウィンドウ管理アプリ．
[PowerToys](https://github.com/microsoft/PowerToys) の FancyZones のような機能があってとてもいい．
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
ちなみにドットバイドット表示すると，[ノッチは無くなります](https://twitter.com/nemuki_dev/status/1454027170116820994?s=20)…笑
インストーラーはユニバーサル化されています 🎉
https://www.madrau.com/srx_download/download.html

### Alfred

Spotlight の強化版的なさむしんぐです．
Mac App Store にもありますが，そちらは更新がされてないようで公式サイトのインストーラーからインストールしました．
インストーラーはユニバーサル化されています 🎉
https://www.alfredapp.com/

## 開発系ソフト

### Visual Studio Code

2 月は Insider 版でしたが，既に正式対応しています．
インストーラーはユニバーサル化されています 🎉
https://code.visualstudio.com/download

### iTerm2

2 月の時点で対応済み 🎉
Mac のターミナルソフトといえばこれ．
先人の HotKey でターミナルが立ち上がるようにする設定は控えめに言って神でした
インストーラーはユニバーサル化されています 🎉
https://iterm2.com/downloads.html

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
後述の [Homebrew](#homebrew) からインストールします．

```
brew install --cask xcodes
```

https://github.com/RobotsAndPencils/XcodesApp/releases/

### Termius

マルチプラットフォーム対応の SSH クライアント
ホストやログイン情報の共有，ローカルポートフォワードや SFTP クライアントまで内蔵しています．
こちらも [GitHub Student Developer Pack](https://education.github.com/pack) で Premium アカウントが無料で使えます．
https://apps.apple.com/jp/app/termius-ssh-client/id1176074088?mt=12

### StopLight Studio

OpenAPI ドキュメントを GUI から意識せずに仕様に沿った yaml ファイルを生成してくれるソフトです．
インストーラーはユニバーサル化されています 🎉

https://stoplight.io/studio/

## 開発環境

### Homebrew

Mac のパッケージマネージャといえばこれ．
公式サイトのワンライナースクリプトで M1 対応版がインストールされます．

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

https://brew.sh/index_ja

### Starship

お気に入りのマルチプラットフォーム対応プロンプトです．
これと[Dracula](https://draculatheme.com/)テーマを合わせるととても可愛いです．
Homebrew からインストール後 `.zshrc` に設定を追記します．

```sh
brew install starship
```

```sh:.zshrc
# Starship
eval "$(starship init zsh)"
```

https://starship.rs/ja-jp/

### n

Node.js のバージョン管理ソフトです．
Ubuntu で使い慣れているのであとで anyenv を入れますがこっちが好きです．
Homebrew からインストールします．

```sh
brew install n
```

https://github.com/tj/n/releases/

#### Node.js

最近 LTS 版が v16 になりましたね
こちらは [n](#n) からインストールします．
:::details 現時点で n からインストールできる arm64 版のリスト

```
❯ n ls-remote -a arm64 --all
17.0.1
17.0.0
16.13.0
16.12.0
16.11.1
16.11.0
16.10.0
16.9.1
16.9.0
16.8.0
16.7.0
16.6.2
16.6.1
16.6.0
16.5.0
16.4.2
16.4.1
16.4.0
16.3.0
16.2.0
16.1.0
16.0.0
```

:::

```sh
sudo n lts
```

```
node -v
v16.13.0

npm -v
8.0.0
```

https://nodejs.org/ja/

### anyenv

\*\*env を楽にインストールできるようにするソフトです．
Homebrew からインストールします．

```
brew install anyenv
anyenv install --init
```

https://github.com/anyenv/anyenv

### Python3

Mac に初期から入っているバージョンは以下でした．

```
python3 --version
Python 3.8.9
```

#### pip3

iTerm を入れた時に Command line tools for Xcode のインストールを求められた時に入ったものは以下でした．

```
pip3 --verison
pip 20.2.3 from /Library/Developer/CommandLineTools/Library/Frameworks/Python3.framework/Versions/3.8/lib/python3.8/site-packages/pip (python 3.8)
```

#### pipenv

pip3 のモジュールを管理するソフト．
Homebrew からインストールします．

```sh
brew install pipenv
```

https://pipenv-ja.readthedocs.io/ja/translate-ja/

### ghq・peco

git のリモートリポジトリ管理ソフトと組み合わせると便利なフィルタリングツールです．
ともに Homebrew からインストールします．
設定は [Songmu/ghq-handbook](https://github.com/Songmu/ghq-handbook) を参考にしました．

```sh
brew install ghq
brew install peco
```

https://github.com/x-motemen/ghq
https://github.com/peco/peco

## 残念ながら未対応だったもの

### Google 日本語入力

Windows で使ってるので欲しかったですが，ことえりの辞書を自動で共有してくれる機能が便利なので耐えです．

### Microsoft OneDrive

Office を使う上で欲しかったです…
2021 年後半に Apple M1 にネイティブ対応するみたいなのでそれを待ちます…
https://pc.watch.impress.co.jp/docs/news/1330557.html

### OBS Studio

VirtualCam 用に欲しかったですが，なくても大丈夫なので耐えです．
