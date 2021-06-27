# Laravel Mixを使った簡易Webサイト構築用の開発環境構築

VS CodeのLive Serverで動作することを想定して作成いたしました。

node 14.17.1で実行に問題ないことを確認しました。

## 実行方法

```sh
git clone https://github.com/sajang-repo/scaffold.git <folder名>
cd <folder名>
npm install
npm run watch
```
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