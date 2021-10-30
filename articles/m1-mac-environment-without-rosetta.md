---
title: "絶対にRosetta 2を入れてはいけないM1 Mac環境構築 2021 10月末編"
emoji: "💻"
type: "tech"
topics: ["Apple", "M1", "Rosetta2", "環境構築"]
published: false
---

先日，Appleの発表会で新型MacBook Proが発表され，見ていた僕はそのすぐ後から予約開始ということで最小構成の14インチMacBook Proを予約・購入しました．
それが10月29日（金）に届いたのでとりあえずRosetta 2を使わずに環境構築をしてみました．
https://zenn.dev/hinastory/articles/71983c4ac8aa2d
先人がいるのは知っていますが，2月に比べるとできることが多くなっているので楽しんでいただけるかと思います．

## 検証したソフト

:::details 普段使いのソフト
- Google Chrome
- パソコン版Google Drive（旧: Google Drive File Stream)
- Slack
- Zoom
- Microsoft Office
- Microsoft Remote Desktop
- 1Password
- Paste
- Meeting Bar
- RunCat
- BetterSnapTools
- Tunnelblick
:::

:::details 開発系ソフト
- Visual Studio Code
- JetBrains ToolBox
    - WebStorm
- iTerm2
- Termius
- Xcodes
:::

:::details 開発環境
- Homebrew
- Starship
- n
    - Node.js(npm, npx)
- anyenv(pyenv)
- python3
    - pip3
    - pipenv
- ghq
- peco
:::

## 普段使いのソフト

### Google Chrome

2月の時点で対応済み🎉
インストーラーはIntel版と別れているので注意です
![](/images/m1-mac/chrome.png)
https://www.google.co.jp/chrome/

### パソコン版 Google Drive (旧: Google Drive File Stream)

最近のアップデート`v52.0`からM1に完全サポートされるようになりました🎉
インストーラーはユニバーサル化されているようです
https://www.google.com/intl/ja_jp/drive/download/
https://support.google.com/a/answer/7577057?hl=ja