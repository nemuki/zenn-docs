---
title: 'Detekt で reviewdog を飼う'
emoji: '🐕'
type: 'tech'
topics: ['Detekt', 'reviewdog']
published: true
---

Detekt を GitHub Actions で検査し、違反があれば reviewdog で通知するように設定してみたので備忘録的な感じで残しておきます。
[alaegin/Detekt-Action](https://github.com/alaegin/Detekt-Action) がありますが、今回は使わないです。

# 最終的にこうなる

https://github.com/nemuki/quarkus-kotlin-hello-world/blob/41535db887eb5f72125b8b39e59579f0fc338307/.github/workflows/detekt.yml

![最終的な例](/images/detekt-reviewdog/finally.png)

要所要所で解説していきます。

# Detekt を GitHub Actions で検査する

この部分です。push した時と main ブランチに向かって PR が出された時に発火します。

https://github.com/nemuki/quarkus-kotlin-hello-world/blob/e09492f80b7eced23243f09de68a99749db14e77/.github/workflows/detekt.yml#L1-L29

こだわりとしては以下があります。

- [concurrency](https://docs.github.com/en/actions/using-jobs/using-concurrency) で連続 push した場合に前のジョブを取り消す。
- [gradle/gradle-build-action](https://github.com/gradle/gradle-build-action) を使って Gradle キャッシュを楽にする。

# reviewdog を追加する

この部分です。`if: failure()`で Detekt の検査で違反された時に発火するよう設定しています。

https://github.com/nemuki/quarkus-kotlin-hello-world/blob/e09492f80b7eced23243f09de68a99749db14e77/.github/workflows/detekt.yml#L31-L41

Detekt は reviewdog に標準で定義されていないので、Detekt から出力される checkstyle XML 方式のレポートを reviewdog に渡しています。
[Reporting | Detekt](https://detekt.dev/docs/introduction/reporting)
<https://github.com/reviewdog/reviewdog#checkstyle-format>

# 注意点

## リポジトリの設定

`https://github.com/[user]/[repo]/settings/actions`内の Workflow Permissions が Read repository contents permission になっていると`secrets.GITHUB_TOKEN`に書き込み権限がなく 403 エラーが吐き出されてしまいます。

```log
reviewdog: POST https://api.github.com/repos/user/repo/pulls/number/reviews: 403 Resource not accessible by integration []
```

<!-- textlint-disable -->
変更前

![Workflow Permissions 変更前](/images/detekt-reviewdog/workflow-permissions-default.png)

変更後

![Workflow Permissions 変更後](/images/detekt-reviewdog/workflow-permissions-changed.png)
<!-- textlint-enable -->

## 変更がないとレビューされない

Detekt で検査したファイルの中に **PR で変更がない**ものが引っかかっている場合、`-reporter=github-pr-review`だとしても reviewdog からはコメントされません。当たり前だろ！と言われそうですが、自分はこれに気がつけず時間を溶かしてしまいました🫠
`-reporter=github-check`とするか`-filter-mode=nofilter`とすることで PR の Summary の Annotations に表示させることはできます。

![Annotations](/images/detekt-reviewdog/github-check-summary.png)

# 感想

初めて reviewdog を飼ってみました。変なところでつまづきましたが、Detekt のログをわざわざ見に行かなくてもいいのはとても楽でした。
