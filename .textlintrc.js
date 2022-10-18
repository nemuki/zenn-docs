module.exports = {
  rules: {
    // 技術文書向けのtextlintルールプリセット
    'preset-ja-technical-writing': {
      // ？や！の使用は許容する
      'no-exclamation-question-mark': false,

      // 弱い日本語表現の利用を許容する
      'ja-no-weak-phrase': false,

      // 文中のコンマの数を制限する
      'max-comma': false,

      'ja-no-mixed-period': {
        // 句点文字として許可する文字列の配列
        // 「、」or「:」or「,」と区切って画像やCodeなどを挿入することがある）
        allowPeriodMarks: [':', '、', ','],
      },

      // 1文章の最大文字数
      // インラインコードブロックがあると超えるので、falseにする
      // ToDo : インラインコードブロックだけ文字数カウントの対象外にしたい
      'sentence-length': false,

      // 同じ助詞の使用しない
      'no-doubled-joshi': {
        // 許容する助詞
        // ("か” ー> 「aaaがbbbか?」の疑問文でどうしても重複する)
        allow: ['が', 'か'],
      },

      // 連続して2回使わない
      //https://github.com/textlint-ja/textlint-rule-ja-no-successive-word
      //"ja-no-successive-word": {
      // 許容する単語
      // "ほめほめ"
      //"allow": ["ほ,め,ほめ"]
      //}
    },

    // インラインコードの前後が日本語である場合に半角スペースを入れる
    'ja-space-around-code': true,

    // markdownの規則を適用する（見出しの深さ(h1, h2, h3など)は必ず１つずつ増加する。など）
    'incremental-headers': false,
  },
  filters: {
    comments: true,
  },
};
