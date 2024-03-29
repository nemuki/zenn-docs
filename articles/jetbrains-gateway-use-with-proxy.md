---
title: 'Proxy環境下にあるサーバーで JetBrains Gateway の IDE バックエンドをダウンロードする'
emoji: '☄️'
type: 'tech'
topics: ['JetBrains', 'JetBrainsGateway']
published: true
---

2021 年 11 月 29 日、[JetBrains IDE 向けリモート開発機能の紹介](https://blog.jetbrains.com/ja/blog/2021/11/29/introducing-remote-development-for-jetbrains-ides/)として JetBrains Gateway がリリースされました！
https://blog.jetbrains.com/ja/blog/2021/11/29/introducing-remote-development-for-jetbrains-ides/
その中に Visual Studio Code の拡張機能 [Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) と似たような機能が追加されて、ローカルに負担をかけずリモート先のリソースを使った開発を行えるようになりました！

ところが、プロキシ環境下にあるサーバーへ IDE バックエンドをダウンロードしようとするとエラーが起こってしまったのでその対処方法を残しておきます。

# 起こった問題

1. JetBrains Gateway で「Download and Start IDE」をクリック

![](/images/jetbrains-gateway/create-project.jpg)

2. リモート側の curl で詰まって失敗する

![](/images/jetbrains-gateway/failed.jpeg)

# 対処法

- リモートの`~/.curlrc`にプロキシ設定を記述する

> `~/.bashrc`に`export http(s)_proxy`を記述していましたがそれは見てくれなかったようです

```sh:.curlrc
proxy=http://user:password@address:port
```

# まとめ
<!-- textlint-disable ja-technical-writing/ja-no-mixed-period -->
誰かのお役に立てると幸いです 🙌
<!-- textlint-enable ja-technical-writing/ja-no-mixed-period -->
