# Laravel Mixを使った簡易Webサイト構築用の開発環境構築

VS CodeのLive Serverで動作することを想定して作成いたしました。


## フォルダー構造

```
.vscode -> Live Serverの設定が書かれています。
dist -> 実際レンダリングされるHTML&CSS&JSが格納されます。
src -> コンパイルされる前のCSS&JSが格納されます。
.gitignore
mix-manifest.json
package.json
README.md
webpack.mix.js -> Webpackの設定が入っています。
```