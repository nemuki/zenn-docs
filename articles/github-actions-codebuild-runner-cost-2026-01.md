---
title: 'GitHub ActionsとAWS CodeBuildのコスト比較（2026年1月版）'
emoji: '🔥'
type: 'tech' # tech: 技術記事 / idea: アイデア
topics: ['githubactions', 'codebuild']
published: true
---

GitHub Actions が 2026 年 1 月から料金改定を行い、Larger runners の料金が大幅に下がりました。
これにより AWS CodeBuild hosted runner を使う場合のコスト差がどうなるかを比較します！

GitHub Actions の料金改定について

https://resources.github.com/ja/actions/2026-pricing-changes-for-github-actions/

## 前提条件

- GitHub Actions の料金はプライベートリポジトリ向け [^1]
  - 旧料金（〜2025/12）は Wayback Machine より取得 [^2]
- CodeBuild の料金は東京リージョン（ap-northeast-1）のオンデマンドEC2料金 [^3]

## Linux x64 比較

<!-- prettier-ignore -->
| CPU | GitHub Actions メモリ | CodeBuild メモリ | GitHub Actions 旧料金 | GitHub Actions 新料金 | CodeBuild 料金 |
| --- | --- | --- | --- | --- | --- |
| 2 core | 7 GB<br>`ubuntu-latest` | 3 GB<br>`general1.small` | $0.008 / 分 | $0.006 / 分 | $0.005 / 分 |
| 4 core | 16 GB | 7 GB<br>`general1.medium` | $0.016 / 分 | $0.012 / 分 | $0.01 / 分 |
| 8 core | 32 GB | 15 GB<br>`general1.large` | $0.032 / 分 | $0.022 / 分 | $0.02 / 分 |
| 16 core | 64 GB | - | $0.064 / 分 | $0.042 / 分 | - |
| 32 core | 128 GB | - | $0.128 / 分 | $0.082 / 分 | - |
| 36 core | - | 72GiB<br>`general1.xlarge` | - | - | $0.1002 / 分 |
| 64 core | 256 GB | - | $0.256 / 分 | $0.162 / 分 | - |
| 72 core | - | 144 GiB<br>`general1.2xlarge` | - | - | $0.25 / 分 |
| 96 core | 384 GB | - | $0.384 / 分 | $0.252 / 分 | - |

<!-- prettier-ignore -->
## Linux arm64 比較

<!-- prettier-ignore -->
| CPU | GitHub Actions メモリ | CodeBuild メモリ | GitHub Actions 旧料金 | GitHub Actions 新料金 | CodeBuild 料金 |
| --- | --- | --- | --- | --- | --- |
| 2 core | 8 GB | 3 GB<br>`arm1.small` | $0.005  / 分 | $0.005 / 分 | $0.00425 / 分 |
| 4 core | 16 GB | 8 GiB<br>`arm1.medium` | $0.010 / 分 | $0.008 / 分 | $0.009 / 分 |
| 8 core | 32 GB | 16 GiB<br>`arm1.large` | $0.020 / 分 | $0.014 / 分 | $0.02 / 分 |
| 16 core | 64 GB | - | $0.040 / 分 | $0.026 / 分 | - |
| 32 core | 128 GB | 64 GiB<br>`arm1.xlarge` | $0.080 / 分 | $0.050 / 分 | $0.08 / 分 |
| 48 core | - | 96 GiB<br>`arm1.2xlarge` | - | - | $0.12 / 分 |
| 64 core | 256 GB | - | $0.160 / 分 | $0.098 / 分 | - |

<!-- prettier-ignore -->

## まとめ

GitHub Actions の料金が安くなり、Larger runners の導入閾値がすごく下がりました！


[^1]: Actions runner pricing - GitHub Docs<br><https://docs.github.com/en/billing/reference/actions-runner-pricing#x64-powered-larger-runners>
[^2]: Wayback Machine - 20251219092252 - Actions runner pricing - GitHub Docs<br><https://web.archive.org/web/20251219092252/https://docs.github.com/en/billing/reference/actions-runner-pricing>
[^3]: 料金 - AWS CodeBuild | AWS<br><https://aws.amazon.com/jp/codebuild/pricing/>
