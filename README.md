# Laravel Mixを使った簡易Webサイト構築用の開発環境構築

VS CodeのLive Serverが5500ポートで動作することを想定して作成いたしました。

ポート番号やフォルダー修正時には`webpack.mix.js`を修正してください。

```js
mix.js('src/js/app.js', 'dist/js')
.sass('src/sass/app.scss', 'dist/css')
.browserSync({
    files: [
        "dist/**/*.*"
    ],
    proxy: {
        target: 'http://127.0.0.1:5500/',
    }
});
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