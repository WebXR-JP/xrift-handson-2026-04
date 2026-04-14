---
theme: default
title: XRift ハンズオン
titleTemplate: '%s - 2026-04-16 オンライン開催'
author: WebXR-JP
info: |
  ## 【初心者歓迎】XRift ハンズオン
  JavaScript でメタバースワールドを作ろう！

  2026-04-16 オンライン開催
seoMeta:
  ogTitle: 【初心者歓迎】XRift ハンズオン
  ogDescription: JavaScript でメタバースワールドを作ろう！ 2026-04-16 オンライン開催
  ogImage: /xrift-ogp.png
  twitterCard: summary_large_image
  twitterTitle: 【初心者歓迎】XRift ハンズオン
  twitterDescription: JavaScript でメタバースワールドを作ろう！ 2026-04-16 オンライン開催
  twitterImage: /xrift-ogp.png
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: none
mdc: true
colorSchema: dark
fonts:
  sans: Noto Sans JP
  serif: Noto Serif JP
  mono: JetBrains Mono
---

<div class="flex flex-col items-center justify-center h-full">

<img src="/xrift-logo.svg" class="h-32 mb-10 opacity-95" alt="XRift" />

# 【初心者歓迎】<br/>XRift ハンズオン

## JavaScript でメタバースワールドを作ろう

<div class="pt-10">
  <span class="px-5 py-2 rounded-full text-xl bg-purple-500/20 border border-purple-400/50">
    2026-04-16 (木) 20:00 - 21:30
  </span>
</div>

<div class="abs-br m-6 text-lg opacity-60">
  #XRift
</div>

</div>

<style>
h1 {
  background-color: #8b5cf6;
  background-image: linear-gradient(45deg, #8b5cf6 10%, #c4b5fd 50%, #a78bfa 100%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  font-size: 4.5rem !important;
  line-height: 1.15 !important;
  font-weight: 800;
}
h2 {
  font-size: 2rem !important;
  margin-top: 1rem;
  opacity: 0.9;
  font-weight: 600;
}
</style>

---
layout: default
---

# 本日のゴール

<div class="text-2xl mt-12 leading-relaxed">
  XRift でのワールド制作の流れを<br/>
  <span class="text-purple-300 font-bold">つくる → 確認する → 公開する</span><br/>
  ひと通り体験しよう
</div>


---
layout: default
---

# タイムテーブル

<div class="text-lg opacity-80 mt-1">
本日は下記の内容で進めていきます。
</div>

<div class="mt-6 space-y-3">

<div class="flex items-stretch gap-4">
  <div class="w-32 shrink-0 flex items-center justify-center rounded-lg bg-purple-500/10 border border-purple-400/30 font-mono text-base text-purple-300 font-bold">20:00<span class="opacity-50 mx-1">-</span>20:15</div>
  <div class="flex-1 p-3 rounded-lg bg-purple-500/5 border border-purple-400/20 flex items-center">
    <div class="text-base">XRift の紹介 / 自己紹介</div>
  </div>
</div>

<div class="flex items-stretch gap-4">
  <div class="w-32 shrink-0 flex items-center justify-center rounded-lg bg-purple-500/20 border border-purple-400/50 font-mono text-base text-purple-200 font-bold">20:15<span class="opacity-50 mx-1">-</span>20:25</div>
  <div class="flex-1 p-3 rounded-lg bg-purple-500/10 border border-purple-400/40 flex items-center justify-between">
    <div class="text-base"><b>環境構築</b>（Node.js / CLI / ログイン）</div>
    <div class="text-xs font-mono text-purple-300">PART 1</div>
  </div>
</div>

<div class="flex items-stretch gap-4">
  <div class="w-32 shrink-0 flex items-center justify-center rounded-lg bg-purple-500/25 border border-purple-400/60 font-mono text-base text-purple-100 font-bold">20:25<span class="opacity-50 mx-1">-</span>21:00</div>
  <div class="flex-1 p-3 rounded-lg bg-purple-500/15 border-2 border-purple-400/50 flex items-center justify-between">
    <div class="text-base"><b>ワールド作成 & アップロード</b>（3 ステップ + 公開）</div>
    <div class="text-xs font-mono text-purple-300">PART 2 & 3</div>
  </div>
</div>

<div class="flex items-stretch gap-4">
  <div class="w-32 shrink-0 flex items-center justify-center rounded-lg bg-purple-500/20 border border-purple-400/50 font-mono text-base text-purple-200 font-bold">21:00<span class="opacity-50 mx-1">-</span>21:30</div>
  <div class="flex-1 p-3 rounded-lg bg-purple-500/10 border border-purple-400/40 flex items-center">
    <div class="text-base"><b>みんなで遊ぼう</b>（ワールド巡回 / 質疑応答）</div>
  </div>
</div>

</div>

---
layout: default
---

# スタッフ紹介

<div class="grid grid-cols-3 gap-6 mt-10 text-center">



<div class="p-6 rounded-xl bg-purple-500/10 border border-purple-400/30">
  <img src="/staff-hagar.png" class="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-2 border-purple-400/50" alt="はが" />
  <div class="font-bold text-purple-300 text-2xl">はが</div>
  <div class="text-base opacity-80 mt-2">ハンズオン担当</div>
  <div class="text-sm opacity-60 mt-2"></div>
</div>

<div class="p-6 rounded-xl bg-purple-500/10 border border-purple-400/30">
  <img src="/staff-tomyu.png" class="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-2 border-purple-400/50" alt="とみゅ〜" />
  <div class="font-bold text-purple-300 text-2xl">とみゅ〜</div>
  <div class="text-base opacity-80 mt-2">サポート</div>
</div>

<div class="p-6 rounded-xl bg-purple-500/10 border border-purple-400/30">
  <img src="/staff-sawa-zen.png" class="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-2 border-purple-400/50" alt="sawa-zen" />
  <div class="font-bold text-purple-300 text-2xl">sawa-zen</div>
  <div class="text-base opacity-80 mt-2">XRift 開発者</div>
  <div class="text-sm opacity-60 mt-2"></div>
</div>
</div>

<div class="mt-10 text-center text-xl opacity-80">
  気軽に質問してください
</div>

---

# 自己紹介タイム

<div class="text-xl opacity-80 mb-8">
  一人 <b class="text-purple-300">30 秒</b> くらいで教えてください！
</div>

<div class="grid grid-cols-2 gap-6">
<div class="space-y-4 text-lg">
  <div class="p-3 rounded-lg bg-purple-500/10 border border-purple-400/30"> お名前・ふだんやっていること</div>
  <div class="p-3 rounded-lg bg-purple-500/10 border border-purple-400/30"> XRift を触ったことはありますか？</div>
  <div class="p-3 rounded-lg bg-purple-500/10 border border-purple-400/30"> 今日たのしみなこと</div>
</div>

<div class="space-y-3">
  <div class="p-4 rounded-lg bg-blue-500/10 border border-blue-400/30 text-base">
    <div class="font-bold text-blue-300 mb-2">話し方</div>
    <div class="space-y-2 text-sm">
      <div><kbd class="px-2 py-0.5 rounded bg-white/10 text-blue-200 font-mono">V</kbd> キーでマイクを有効にして話せます</div>
      <div><kbd class="px-2 py-0.5 rounded bg-white/10 text-blue-200 font-mono">T</kbd> キーでチャットも使えます</div>
    </div>
  </div>
  <div class="p-3 rounded-lg bg-yellow-500/10 border border-yellow-400/30 text-sm">
    <span class="text-yellow-300">マイクが有効にならない場合：</span>ページをリロードしてマイクを選択し直してください
  </div>
</div>
</div>

---
layout: section
class: text-center
---

<div class="flex flex-col items-center justify-center h-full">

<img src="/xrift-logo.svg" class="h-24 mb-8 opacity-90" alt="XRift" />

# XRift とは？

<div class="text-2xl opacity-70 mt-4">ブラウザだけで動くメタバース</div>

<div class="mt-10 flex gap-3 text-sm">
  <span class="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/40">Web 技術</span>
  <span class="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/40">マルチプラットフォーム</span>
  <span class="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/40">JavaScript で作れる</span>
</div>

</div>

<style>
h1 {
  font-size: 4.5rem !important;
  color: #a78bfa;
  font-weight: 800;
}
</style>

---
layout: default
---

# XRift ってどんなもの？

<div class="text-lg opacity-80 mt-1">
  ひとことで言うと、<b class="text-purple-300">ブラウザで動くメタバースプラットフォーム</b>です
</div>

<div class="grid grid-cols-[1fr_1.2fr] gap-5 mt-4">

<div class="space-y-3">
  <div class="p-3 rounded-xl bg-purple-500/10 border border-purple-400/30">
    <div class="font-bold text-purple-300 text-lg mb-1">ブラウザだけで動く</div>
    <div class="text-sm opacity-80">インストール不要。URL を開くだけで入れる</div>
  </div>
  <div class="p-3 rounded-xl bg-purple-500/10 border border-purple-400/30">
    <div class="font-bold text-purple-300 text-lg mb-1">JavaScript で作れる</div>
    <div class="text-sm opacity-80">React Three Fiber ベース</div>
  </div>
  <div class="p-3 rounded-xl bg-purple-500/10 border border-purple-400/30">
    <div class="font-bold text-purple-300 text-lg mb-1">URL を共有するだけ</div>
    <div class="text-sm opacity-80">誰でもワールドに招待できる</div>
  </div>
</div>

<div class="rounded-xl overflow-hidden border-2 border-purple-400/30">
  <img src="/feature-shots/world-3d.png" class="w-full" alt="XRift ワールド例" />
  <div class="p-2 text-center text-sm opacity-70 bg-purple-500/10">
    3Dモデルデータを利用したワールド作成ができる
  </div>
</div>

</div>

<div class="mt-4 p-3 rounded-lg bg-purple-500/10 border-l-4 border-purple-400 text-base">
  今日は <b>自分のワールドを作って URL を持って帰る</b> ところまでやります
</div>

---
layout: section
class: text-center
---

<div class="flex flex-col items-center justify-center h-full">

<div class="text-base font-mono text-purple-300/70 tracking-widest mb-4">PART 1 / 3</div>

# 環境構築

<div class="text-2xl opacity-70 mt-4">Node.js から XRift CLI まで</div>

<div class="mt-8 flex gap-3 text-sm">
  <span class="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/40">Node.js</span>
  <span class="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/40">VS Code</span>
  <span class="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/40">xrift CLI</span>
</div>


</div>

<style>
h1 {
  font-size: 4.5rem !important;
  color: #a78bfa;
  font-weight: 800;
}
</style>

---
layout: default
---

# VS Code をインストール

<div class="text-lg opacity-80 mt-1">
<b>コードエディタ</b> = テキストファイルを編集する専用アプリ。メモ帳の超強化版です
</div>

<div class="grid grid-cols-2 gap-5 mt-4">

<div>
  <img src="/setup-shots/vscode-download.png" class="rounded-lg border border-slate-600/50 shadow-lg" alt="VS Code ダウンロードページ" />
  <div class="text-xs opacity-60 mt-1 text-center"><a href="https://code.visualstudio.com">code.visualstudio.com</a> を開いてダウンロード</div>
</div>

<div class="space-y-3 text-base">
  <div class="p-3 rounded-xl bg-purple-500/10 border border-purple-400/30">
    <div class="font-bold text-purple-300 mb-1">Windows</div>
    <div class="text-sm"><b>Download for Windows</b> → .exe を実行 → 「次へ」で完了</div>
  </div>
  <div class="p-3 rounded-xl bg-purple-500/10 border border-purple-400/30">
    <div class="font-bold text-purple-300 mb-1">Mac</div>
    <div class="text-sm"><b>Download for Mac</b> → .zip を展開 → アプリフォルダへ移動</div>
  </div>
  <div class="p-2 rounded-lg bg-yellow-500/10 border-l-4 border-yellow-400 text-sm">
    既にインストール済みの方はスキップ OK
  </div>
</div>

</div>

---
layout: default
---

# なぜ VS Code を使うの？

<div class="text-lg opacity-80 mt-1">
XRift は「コードを書いて、ブラウザで確認する」というスタイルで開発します
</div>

<div class="grid grid-cols-2 gap-6 mt-6 text-lg">

<div class="p-5 rounded-xl bg-slate-500/10 border border-slate-400/30">
  <div class="text-slate-300 font-bold text-2xl mb-3">よくある 3D ワールド開発</div>
  <div class="space-y-3">
    <div class="flex items-start gap-3">
      <div class="w-8 h-8 rounded-md bg-slate-700 flex items-center justify-center text-sm font-bold shrink-0">1</div>
      <div>専用エディタを起動して GUI で配置</div>
    </div>
    <div class="flex items-start gap-3">
      <div class="w-8 h-8 rounded-md bg-slate-700 flex items-center justify-center text-sm font-bold shrink-0">2</div>
      <div>アセットはエディター内で管理</div>
    </div>
    <div class="flex items-start gap-3">
      <div class="w-8 h-8 rounded-md bg-slate-700 flex items-center justify-center text-sm font-bold shrink-0">3</div>
      <div>SDK からビルドしてアップロード</div>
    </div>
  </div>
  <div class="mt-4 text-sm opacity-60">マウスでの GUI 操作が中心</div>
</div>

<div class="p-5 rounded-xl bg-purple-500/15 border-2 border-purple-400/50">
  <div class="text-purple-300 font-bold text-2xl mb-3">XRift の開発スタイル</div>
  <div class="space-y-3">
    <div class="flex items-start gap-3">
      <div class="w-8 h-8 rounded-md bg-purple-700 flex items-center justify-center text-sm font-bold shrink-0">1</div>
      <div><b>VS Code</b> でコードを書く</div>
    </div>
    <div class="flex items-start gap-3">
      <div class="w-8 h-8 rounded-md bg-purple-700 flex items-center justify-center text-sm font-bold shrink-0">2</div>
      <div>保存するとブラウザが自動更新</div>
    </div>
    <div class="flex items-start gap-3">
      <div class="w-8 h-8 rounded-md bg-purple-700 flex items-center justify-center text-sm font-bold shrink-0">3</div>
      <div><b>xrift</b> コマンドでアップロード</div>
    </div>
  </div>
  <div class="mt-4 text-sm opacity-80 text-purple-200">Web サイトを作る感覚に近い</div>
</div>

</div>

<div class="mt-5 p-3 rounded-lg bg-purple-500/10 border-l-4 border-purple-400 text-base">
  インストール中に知っておくと、このあとの作業がスムーズです
</div>

---
layout: default
---

# VS Code でターミナルを開こう

<div class="text-lg opacity-80 mt-1">
<b>ターミナル</b> = コマンド（命令文）を打ち込む場所。この先ずっと使います
</div>

<div class="grid grid-cols-[1fr_1.4fr] gap-6 mt-4">

<div class="space-y-4">
  <div class="p-4 rounded-xl bg-purple-500/10 border border-purple-400/30 text-base">
    <div class="font-bold text-purple-300 text-xl mb-3">開き方</div>
    <div class="space-y-2">
      <div class="flex items-start gap-2">
        <span class="text-purple-300 font-bold shrink-0">①</span>
        <span>上部メニュー <b>Terminal</b> をクリック</span>
      </div>
      <div class="flex items-start gap-2">
        <span class="text-purple-300 font-bold shrink-0">②</span>
        <span><b>New Terminal</b> を選択</span>
      </div>
    </div>
    <div class="mt-3 p-2 rounded bg-slate-700/50 font-mono text-sm text-center">
      ショートカット: <kbd class="px-2 py-0.5 rounded bg-slate-600 text-white">Ctrl</kbd> + <kbd class="px-2 py-0.5 rounded bg-slate-600 text-white">`</kbd>
    </div>
  </div>

  <div class="p-3 rounded-lg bg-yellow-500/10 border-l-4 border-yellow-400 text-base">
    ここから先のコマンドは<br/><b>すべてこのターミナルに入力</b>します
  </div>
</div>

<div>
  <img src="/setup-shots/vscode-terminal.png" class="rounded-lg border border-slate-600/50 shadow-lg" alt="VS Code ターミナル" />
  <div class="text-sm opacity-60 mt-2 text-center">画面下部がターミナル。ここにコマンドを入力します</div>
</div>

</div>

---
layout: default
---

# Step 1: Node.js をインストール

<div class="text-lg opacity-80 mt-1">
<b>Node.js</b> = JavaScript をパソコン上で動かすためのソフト。XRift の開発に必須です
</div>

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="space-y-3">
  <div class="p-3 rounded-xl bg-purple-500/10 border border-purple-400/30 text-base">
    <div class="font-bold text-purple-300 text-lg mb-1">インストール手順</div>
    <ol class="text-sm space-y-0.5 list-decimal list-inside">
      <li><a href="https://nodejs.org">nodejs.org</a> を開く</li>
      <li><b>LTS</b>（推奨版）をダウンロード</li>
      <li>インストーラーを実行（「次へ」で OK）</li>
    </ol>
  </div>

  <div class="p-3 rounded-xl bg-slate-500/10 border border-slate-400/30">
    <div class="font-bold text-slate-300 text-sm mb-1">VS Code ターミナルで確認</div>

```bash
node --version   # v18 以上なら OK
npm --version
```

  </div>
</div>

<div>
  <img src="/setup-shots/nodejs-download.png" class="rounded-lg border border-slate-600/50 shadow-lg" alt="Node.js ダウンロードページ" />
  <div class="text-xs opacity-60 mt-1 text-center"><a href="https://nodejs.org">nodejs.org</a> — LTS（推奨版）を選んでください</div>
</div>

</div>

---
layout: default
---

# Step 2: XRift CLI をインストール

<div class="text-lg opacity-80 mt-1">
<b>XRift CLI</b> = ワールドの作成・アップロードを行うコマンドラインツールです
</div>

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="space-y-3">
  <div class="p-3 rounded-xl bg-purple-500/10 border border-purple-400/30 text-base">
    <div class="font-bold text-purple-300 text-lg mb-2">インストール</div>

```bash
npm install -g @xrift/cli
```

  </div>

  <div class="p-3 rounded-xl bg-slate-500/10 border border-slate-400/30">
    <div class="font-bold text-slate-300 text-sm mb-1">インストールされたか確認</div>

```bash
xrift --version
```

  </div>

  <div class="p-2 rounded-lg bg-purple-500/10 border-l-4 border-purple-400 text-sm">
    バージョン番号が表示されれば成功
  </div>
</div>

<div class="space-y-3">
  <div class="p-4 rounded-xl bg-yellow-500/10 border border-yellow-400/30 text-base">
    <div class="font-bold text-yellow-300 mb-2">権限エラーが出たら</div>
    <div class="space-y-2 text-sm">
      <div><b class="text-yellow-300">Windows:</b> PowerShell を管理者権限で開き直す</div>
      <div><b class="text-yellow-300">Mac:</b> <code>sudo npm install -g @xrift/cli</code></div>
    </div>
  </div>
</div>

</div>

---
layout: default
---

# Step 3: XRift にログイン

<div class="text-lg opacity-80 mt-1">
アップロードに必要なので、ここでログインしておきましょう
</div>

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="space-y-3">
  <div class="p-3 rounded-xl bg-purple-500/10 border border-purple-400/30 text-base">
    <div class="font-bold text-purple-300 text-lg mb-2">ログイン</div>

```bash
xrift login
```

  <div class="text-sm opacity-80 mt-2">ブラウザが自動で開きます。XRift アカウントでログインしてください</div>
  </div>

  <div class="p-3 rounded-xl bg-slate-500/10 border border-slate-400/30">
    <div class="font-bold text-slate-300 text-sm mb-1">ログイン状態を確認</div>

```bash
xrift whoami
```

  </div>

  <div class="p-2 rounded-lg bg-purple-500/10 border-l-4 border-purple-400 text-sm">
    自分のユーザー名が表示されれば環境構築は完了！
  </div>
</div>

<div class="space-y-3">
  <div class="p-4 rounded-xl bg-yellow-500/10 border border-yellow-400/30 text-base">
    <div class="font-bold text-yellow-300 mb-2">アカウントがまだない方</div>
    <div class="text-sm"><a href="https://xrift.net/"><b>https://xrift.net/</b></a> で無料作成できます</div>
  </div>

  <div class="p-4 rounded-xl bg-purple-500/10 border border-purple-400/30">
    <div class="font-bold text-purple-300 text-lg mb-2">ここまでのまとめ</div>
    <div class="space-y-1 text-sm opacity-80">
      <div class="flex items-center gap-2"><span class="text-green-400">&#10003;</span> VS Code</div>
      <div class="flex items-center gap-2"><span class="text-green-400">&#10003;</span> Node.js</div>
      <div class="flex items-center gap-2"><span class="text-green-400">&#10003;</span> XRift CLI</div>
      <div class="flex items-center gap-2"><span class="text-green-400">&#10003;</span> ログイン済み</div>
    </div>
  </div>
</div>

</div>

---
layout: section
class: text-center
---

<div class="flex flex-col items-center justify-center h-full">

<div class="text-base font-mono text-purple-300/70 tracking-widest mb-4">PART 2 / 3</div>

# ワールドを作ろう



</div>

<style>
h1 {
  font-size: 4.5rem !important;
  color: #a78bfa;
  font-weight: 800;
}
</style>

---
layout: default
---

# VS Code で作業フォルダを開こう

<div class="text-lg opacity-80 mt-1">
  プロジェクトを作る前に、作業用のフォルダを VS Code で開きます
</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="space-y-2">
  <div class="text-purple-300 font-bold text-base">① VS Code を起動</div>
  <img src="/setup-shots/vscode-welcome.png" class="w-full rounded-lg border border-purple-400/30" alt="VS Code Welcome" />
  <div class="text-xs opacity-70">Welcome 画面が表示されます</div>
</div>

<div class="space-y-2">
  <div class="text-purple-300 font-bold text-base">② File → Open Folder</div>
  <img src="/setup-shots/vscode-file-menu.png" class="w-full rounded-lg border border-purple-400/30" alt="File menu" />
  <div class="text-xs opacity-70">メニューから <b>Open Folder...</b> をクリック</div>
</div>

<div class="space-y-2">
  <div class="text-purple-300 font-bold text-base">③ 作業用フォルダを選択</div>
  <img src="/setup-shots/vscode-folder-picker.png" class="w-full rounded-lg border border-purple-400/30" alt="Folder picker" />
  <div class="text-xs opacity-70">デスクトップなどに作った<br/><b>作業用フォルダ</b>を選んで開く</div>
</div>

</div>

<div class="mt-3 p-2 rounded-lg bg-yellow-500/10 border-l-4 border-yellow-400 text-sm">
  作業用フォルダがまだない場合は、デスクトップで<b>右クリック → 新規作成 → フォルダー</b>で作成してください
</div>

---
layout: default
---

# xrift-cliで新規プロジェクトを作ろう！

<div class="text-lg opacity-80 mt-1">
  ターミナルからコマンドでプロジェクトを作ります
</div>

<div class="grid grid-cols-2 gap-5 mt-4">

<div class="space-y-3">
  <div class="p-3 rounded-xl bg-purple-500/10 border border-purple-400/30 text-base">
    <div class="font-bold text-purple-300 text-lg mb-1">① ターミナルを開く</div>
    <div class="mt-1 p-2 rounded bg-slate-700/50 font-mono text-sm text-center">
      <kbd class="px-2 py-0.5 rounded bg-slate-600 text-white">Ctrl</kbd> + <kbd class="px-2 py-0.5 rounded bg-slate-600 text-white">`</kbd>
    </div>
  </div>

  <div class="p-3 rounded-xl bg-purple-500/10 border border-purple-400/30 text-base">
    <div class="font-bold text-purple-300 text-lg mb-1">② コマンドを入力</div>

```bash
xrift create world my-first-world
```

  </div>

  <div class="p-3 rounded-xl bg-purple-500/10 border border-purple-400/30 text-base">
    <div class="font-bold text-purple-300 text-lg mb-1">③ 選択肢に答える</div>
    <div class="space-y-1 text-sm">
      <div><b>1. Create in the current directory</b>を選択</div>
      <div><b>2. Custom template</b>（カスタムテンプレート） を選択</div>
      <div class="font-mono text-sm mt-1">3. 「<span class="text-yellow">WebXR-JP/xrift-world-template-2026-04</span>」を入力</div>
    </div>
  </div>
</div>

<div class="space-y-3">

  <div class="p-3 rounded-xl bg-purple-500/10 border border-purple-400/30">
    <div class="font-bold text-purple-300 text-sm mb-1">生成されるファイル</div>

```text
作業用フォルダ/
├── src/World.tsx  ← メイン
├── public/ ← 3D モデル・画像
└── package.json
```

  </div>
</div>

</div>


---
layout: default
---

# 困ったら公式ドキュメント

<div class="text-lg opacity-80 mt-1">
<a href="https://docs.xrift.net" class="font-mono text-purple-300">https://docs.xrift.net</a> に全コンポーネントとサンプルコードが揃っています
</div>

<div class="grid grid-cols-6 gap-2 mt-6">

<div class="rounded-lg overflow-hidden border-2 border-purple-400/40 bg-purple-500/5">
  <img src="/docs-shots/docs-home.png" class="w-full" alt="Docs Home" />
  <div class="p-3">
    <div class="font-bold text-purple-300 text-xs">トップページ</div>
    <div class="text-xs opacity-70">ドキュメント</div>
  </div>
</div>

<div class="rounded-lg overflow-hidden border-2 border-purple-400/40 bg-purple-500/5">
  <img src="/docs-shots/docs-getting-started.png" class="w-full" alt="Getting Started" />
  <div class="p-3">
    <div class="font-bold text-purple-300 text-xs">Getting Started</div>
    <div class="text-xs opacity-70">環境構築の手順</div>
  </div>
</div>

<div class="rounded-lg overflow-hidden border-2 border-purple-400/40 bg-purple-500/5">
  <img src="/docs-shots/docs-create-first-world.png" class="w-full" alt="First World" />
  <div class="p-3">
    <div class="font-bold text-purple-300 text-xs">最初のワールド</div>
    <div class="text-xs opacity-70">チュートリアル</div>
  </div>
</div>

<div class="rounded-lg overflow-hidden border-2 border-purple-400/40 bg-purple-500/5">
  <img src="/docs-shots/docs-components.png" class="w-full" alt="Components" />
  <div class="p-3">
    <div class="font-bold text-purple-300 text-xs">コンポーネント</div>
    <div class="text-xs opacity-70">API リファレンス</div>
  </div>
</div>

<div class="rounded-lg overflow-hidden border-2 border-purple-400/40 bg-purple-500/5">
  <img src="/docs-shots/docs-cli.png" class="w-full" alt="CLI" />
  <div class="p-3">
    <div class="font-bold text-purple-300 text-xs">CLI コマンド</div>
    <div class="text-xs opacity-70">xrift コマンド一覧</div>
  </div>
</div>

<div class="rounded-lg overflow-hidden border-2 border-purple-400/40 bg-purple-500/5">
  <img src="/docs-shots/docs-quickstart.png" class="w-full" alt="Quickstart" />
  <div class="p-3">
    <div class="font-bold text-purple-300 text-xs">クイックスタート</div>
    <div class="text-xs opacity-70">すぐ動かす手順</div>
  </div>
</div>

</div>

<div class="mt-4 p-3 rounded-lg bg-purple-500/10 border-l-4 border-purple-400 text-base">
  早めに進められてる方がいたら、こういったドキュメントをもとにどんどん進めてもOKです！
</div>

---
layout: default
---

# ハンズオン開始

<div class="text-lg opacity-80 mt-1">
  初めてのワールド作成をしていきましょう
</div>

<div class="grid grid-cols-3 gap-5 mt-6">

<div class="text-center">
  <img src="/step-shots/step-01-box-new.png" class="w-full rounded-lg border border-purple-400/30" alt="Step 1" />
  <div class="text-sm mt-2 text-purple-300 font-bold">Step 1</div>
  <div class="text-xs opacity-70">XRIFTのワールドのコードを書いてみよう！</div>
</div>

<div class="text-center">
  <img src="/step-shots/step-02-boxduck.png" class="w-full rounded-lg border border-purple-400/30" alt="Step 2" />
  <div class="text-sm mt-2 text-purple-300 font-bold">Step 2</div>
  <div class="text-xs opacity-70">3D モデルの配置</div>
</div>

<div class="text-center">
  <img src="/step-shots/step-03-all.png" class="w-full rounded-lg border border-purple-400/30" alt="Step 3" />
  <div class="text-sm mt-2 text-purple-300 font-bold">Step 3</div>
  <div class="text-xs opacity-70">Skyboxの設定をしてみよう！</div>
</div>

</div>

<div class="mt-6 p-3 rounded-lg bg-purple-500/10 border-l-4 border-purple-400 text-base">
  各ステップで <code class="text-purple-300">src/World.tsx</code> のコメントを外す → 保存 → ブラウザで確認
</div>

---
layout: section
class: text-center
---

<div class="flex flex-col items-center justify-center h-full">
  <h1 class="text-5xl font-bold">コードを編集してみよう</h1>
</div>

---
layout: default
---

# 1. 箱を置こう

<div class="text-lg opacity-80 mt-1">
  シンプルな箱を置いてみます
</div>

<div class="grid grid-cols-2 gap-8 mt-6">
  <div>
    <div class="text-sm opacity-60 mb-2">作業前</div>
    <img src="/step-shots/step-00-empty-new.png" class="w-full rounded-lg border border-white/10" alt="作業前" />
  </div>
  <div>
    <div class="text-sm text-purple-300 font-bold mb-2">作業後</div>
    <img src="/step-shots/step-01-box-new.png" class="w-full rounded-lg border-2 border-purple-400" alt="作業後" />
  </div>
</div>

---
layout: default
---

# Step 1 — やること

<div class="text-lg opacity-80 mt-1">
</div>

<div class="mt-8 space-y-4 max-w-lg mx-auto">

<div class="flex items-center gap-4 p-4 rounded-xl bg-purple-500/10 border border-purple-400/30">
  <div class="text-2xl font-bold text-purple-400 w-8">1</div>
  <div>
    <div class="font-bold">World.tsx を開こう</div>
    <div class="text-sm opacity-70 mt-1"></div>
  </div>
</div>

<div class="flex items-center gap-4 p-4 rounded-xl bg-purple-500/10 border border-purple-400/30">
  <div class="text-2xl font-bold text-purple-400 w-8">2</div>
  <div>
    <div class="font-bold">開発環境を起動しよう！</div>
  </div>
</div>

<div class="flex items-center gap-4 p-4 rounded-xl bg-purple-500/10 border border-purple-400/30">
  <div class="text-2xl font-bold text-purple-400 w-8">3</div>
  <div>
    <div class="font-bold">コードを編集してみよう！</div>
  </div>
</div>

</div>



---
layout: default
---

# World.tsx を開こう

<div class="text-lg opacity-80 mt-1">
  <code>src/World.tsx</code> — ワールドの中身が書かれたファイル
</div>

<div class="grid grid-cols-5 gap-6 mt-4">

<div class="col-span-3">
  <img src="/setup-shots/vscode-worldtsx.png" class="w-full rounded-lg border border-white/10" alt="VS Code で World.tsx を開いた様子" />
</div>

<div class="col-span-2 space-y-3">

<div class="p-3 rounded-lg bg-purple-500/10 border border-purple-400/30">
  <div class="font-bold text-purple-300">JSX</div>
  <div class="text-sm opacity-80 mt-1">
    JavaScript の中に HTML っぽく 3D を書ける記法
  </div>
</div>

<div class="p-3 rounded-lg bg-purple-500/10 border border-purple-400/30">
  <div class="font-bold text-purple-300">中カッコ = JavaScript</div>
  <div class="text-sm opacity-80 mt-1">
    <code>position={[0, 0.5, 0]}</code> のように値を渡す
  </div>
</div>

</div>

</div>


---
layout: default
---

# 開発環境を起動

ターミナルで下記を入力します
```bash
npm install # 1. 必要なパッケージをインストール
npm run dev # 2. 開発環境を起動
```

<div class="mt-3 text-base opacity-80">
ブラウザで <code class="text-purple-300">http://localhost:5173</code> が自動で開きます
</div>

<div class="mt-5 grid grid-cols-2 gap-5">

<div class="p-4 rounded-xl bg-purple-500/10 border border-purple-400/30">
  <div class="font-bold text-purple-300 text-xl mb-2">操作方法</div>
  <div class="space-y-1.5 text-base">
    <div class="flex items-center gap-3"><code class="text-purple-300 font-mono text-sm bg-purple-500/20 px-2 py-0.5 rounded">W A S D</code><span>移動</span></div>
    <div class="flex items-center gap-3"><code class="text-purple-300 font-mono text-sm bg-purple-500/20 px-2 py-0.5 rounded">Space</code><span>ジャンプ</span></div>
    <div class="flex items-center gap-3"><code class="text-purple-300 font-mono text-sm bg-purple-500/20 px-2 py-0.5 rounded">マウス</code><span>視点</span></div>
    <div class="flex items-center gap-3"><code class="text-purple-300 font-mono text-sm bg-purple-500/20 px-2 py-0.5 rounded">クリック</code><span>インタラクト</span></div>
    <div class="flex items-center gap-3"><code class="text-purple-300 font-mono text-sm bg-purple-500/20 px-2 py-0.5 rounded">ESC</code><span>視点操作解除</span></div>
  </div>
</div>

</div>


---
layout: default
---

# コードを編集してみよう！

<div class="text-sm opacity-80 mb-3">
  World.tsx でこの部分を探してみてください
</div>

```tsx
{/* ↓ このコメントを外す */}
<mesh position={[0, 0.5, 0]}>
  <boxGeometry args={[1, 1, 1]} />
  <meshStandardMaterial color="orange" />
</mesh>
```

<div class="grid grid-cols-5 gap-5 mt-3">

<div class="col-span-3">
  <div class="p-3 rounded-lg bg-yellow-500/15 border-2 border-yellow-400/60 text-sm space-y-2">
    <div><b class="text-yellow-300">1.</b> このブロックを囲む <code class="text-yellow-300">{/*</code> と <code class="text-yellow-300">*/}</code> を削除</div>
    <div><b class="text-yellow-300">2.</b> ファイルを保存（<kbd class="px-1 py-0.5 rounded bg-white/10 text-xs">Ctrl+S</kbd>）</div>
  </div>
</div>

<div class="col-span-2">
  <div class="p-3 rounded-lg bg-purple-500/10 border border-purple-400/30">
    <div class="text-sm font-bold text-purple-300 mb-2">終わったらやってみよう！</div>
    <div class="text-xs opacity-80 space-y-2">
      <div>mesh の <code>position</code> の数字を変えてみよう → 箱が動く</div>
      <div>boxGeometry の <code>args</code> を変えてみよう → 形が変わる</div>
      <div>meshStandardMaterial の <code>color</code> を変えてみよう → red / blue / <code>#ff00ff</code></div>
    </div>
  </div>
</div>

</div>

---
layout: default
---

# 確認してみよう

<div class="text-lg opacity-80 mt-1">
  保存したら開発画面を見てみましょう
</div>

<div class="flex justify-center mt-6">
  <div class="w-3/4">
    <img src="/step-shots/step-01-box-new.png" class="w-full rounded-lg border-2 border-purple-400" alt="Step 1 の結果" />
  </div>
</div>

<div class="mt-4 p-3 rounded-lg bg-green-500/10 border-l-4 border-green-400 text-center text-lg">
  オレンジの箱が表示されたら成功！
</div>

---
layout: default
---

# 2. 3D モデルを置こう

<div class="text-lg opacity-80 mt-1">
  テンプレートに入っているアヒルの 3D モデルを配置します
</div>

<div class="grid grid-cols-2 gap-8 mt-6">
  <div>
    <div class="text-sm opacity-60 mb-2">作業前</div>
    <img src="/step-shots/step-01-box-new.png" class="w-full rounded-lg border border-white/10" alt="作業前" />
  </div>
  <div>
    <div class="text-sm text-purple-300 font-bold mb-2">作業後</div>
    <img src="/step-shots/step-02-boxduck.png" class="w-full rounded-lg border-2 border-purple-400" alt="作業後" />
  </div>
</div>

---
layout: default
---

# Step 2 — やること

<div class="text-lg opacity-80 mt-1">
</div>

<div class="mt-8 space-y-4 max-w-lg mx-auto">

<div class="flex items-center gap-4 p-4 rounded-xl bg-purple-500/10 border border-purple-400/30">
  <div class="text-2xl font-bold text-purple-400 w-8">1</div>
  <div>
    <div class="font-bold">3D モデルの形式を知ろう</div>
  </div>
</div>

<div class="flex items-center gap-4 p-4 rounded-xl bg-purple-500/10 border border-purple-400/30">
  <div class="text-2xl font-bold text-purple-400 w-8">2</div>
  <div>
    <div class="font-bold">コードを編集してみよう！</div>
  </div>
</div>

<div class="flex items-center gap-4 p-4 rounded-xl bg-purple-500/10 border border-purple-400/30">
  <div class="text-2xl font-bold text-purple-400 w-8">3</div>
  <div>
    <div class="font-bold">確認してみよう！</div>
  </div>
</div>

</div>

---
layout: default
---

# Three.js で使える 3D モデル

<div class="text-lg opacity-80 mt-1">
  Three.js は主要な 3D 形式（<code>.glb</code> / <code>.fbx</code> など）に対応しています
</div>

<div class="mt-5 space-y-4">

<div class="p-4 rounded-xl bg-purple-500/10 border border-purple-400/30">
  <div class="font-bold text-purple-300 text-lg">.glb / .gltf — Web 標準の 3D モデル形式</div>
  <div class="text-sm opacity-80 mt-2">
    メッシュ・テクスチャ・アニメーションを 1 ファイルにまとめられる。Web では .glb が主流。
  </div>
</div>

<div class="grid grid-cols-2 gap-4">
  <div class="rounded-xl overflow-hidden border border-purple-400/30 bg-purple-500/5 flex items-center">
    <img src="/feature-shots/thebasemesh.png" class="w-28 h-20 object-cover" alt="The Base Mesh" />
    <div class="p-3">
      <b class="text-purple-300">The Base Mesh</b>
      <div class="text-xs opacity-80 mt-1">無料の CC0 3D モデル素材サイト</div>
    </div>
  </div>
  <div class="p-3 rounded-xl border border-purple-400/30 bg-purple-500/5 flex flex-col justify-center">
    <div class="text-sm space-y-1">
      <div class="flex items-center gap-1"><span class="text-purple-400">▸</span> <b class="text-purple-300">Sketchfab</b> — 大規模 3D モデルマーケット</div>
      <div class="flex items-center gap-1"><span class="text-purple-400">▸</span> <a href="https://poly.pizza" class="text-purple-300 font-bold">poly.pizza</a> — ローポリ素材中心</div>
    </div>
  </div>
</div>

<div class="p-3 rounded-lg bg-green-500/10 border-l-4 border-green-400 text-sm">
  テンプレートの <code>public/</code> フォルダにアヒル（<code>duck.glb</code>）が入っています — これを使います！
</div>

</div>

---
layout: default
---

# 3D モデルを配置してみよう！

<div class="text-sm opacity-80 mb-3">
  World.tsx でこの部分を探してみてください
</div>

```tsx
{/* ↓ このコメントを外す */}
<Gltf
  src={`${baseUrl}duck.glb`}
  position={[-0.4, 0, 1.2]}
  scale={1.2}
/>
```

<div class="grid grid-cols-5 gap-5 mt-3">

<div class="col-span-3">
  <div class="p-3 rounded-lg bg-yellow-500/15 border-2 border-yellow-400/60 text-sm space-y-2">
    <div><b class="text-yellow-300">1.</b> このブロックを囲む <code class="text-yellow-300">{/*</code> と <code class="text-yellow-300">*/}</code> を削除</div>
    <div><b class="text-yellow-300">2.</b> ファイルを保存（<kbd class="px-1 py-0.5 rounded bg-white/10 text-xs">Ctrl+S</kbd>）</div>
  </div>
</div>

<div class="col-span-2">
  <div class="p-3 rounded-lg bg-purple-500/10 border border-purple-400/30">
    <div class="text-sm font-bold text-purple-300 mb-2">終わったらやってみよう！</div>
    <div class="text-xs opacity-80 space-y-2">
      <div>Gltf の <code>position</code> を変えてみよう → アヒルが動く</div>
      <div>Gltf の <code>scale</code> を変えてみよう → 大きさが変わる</div>
    </div>
  </div>
</div>

</div>

---
layout: default
---

# Step 2 — 確認してみよう

<div class="text-lg opacity-80 mt-1">
  保存したら開発画面を見てみましょう
</div>

<div class="flex justify-center mt-6">
  <div class="w-3/4">
    <img src="/step-shots/step-02-boxduck.png" class="w-full rounded-lg border-2 border-purple-400" alt="Step 2 の結果" />
  </div>
</div>

<div class="mt-4 p-3 rounded-lg bg-green-500/10 border-l-4 border-green-400 text-center text-lg">
  アヒルが表示されたら成功！
</div>

---
layout: default
---

# 3. Skybox を変えてみよう

<div class="text-lg opacity-80 mt-1">
  3D 空間の背景（空）をパノラマ画像で表現します
</div>

<div class="grid grid-cols-2 gap-8 mt-6">
  <div>
    <div class="text-sm opacity-60 mb-2">作業前</div>
    <img src="/step-shots/step-02-boxduck.png" class="w-full rounded-lg border border-white/10" alt="作業前" />
  </div>
  <div>
    <div class="text-sm text-purple-300 font-bold mb-2">作業後</div>
    <img src="/step-shots/step-03-all.png" class="w-full rounded-lg border-2 border-purple-400" alt="作業後" />
  </div>
</div>

---
layout: default
---

# Step 3 — やること

<div class="text-lg opacity-80 mt-1">
</div>

<div class="mt-8 space-y-4 max-w-lg mx-auto">

<div class="flex items-center gap-4 p-4 rounded-xl bg-purple-500/10 border border-purple-400/30">
  <div class="text-2xl font-bold text-purple-400 w-8">1</div>
  <div>
    <div class="font-bold">Skybox のしくみを知ろう</div>
  </div>
</div>

<div class="flex items-center gap-4 p-4 rounded-xl bg-purple-500/10 border border-purple-400/30">
  <div class="text-2xl font-bold text-purple-400 w-8">2</div>
  <div>
    <div class="font-bold">コードを編集してみよう！</div>
  </div>
</div>

<div class="flex items-center gap-4 p-4 rounded-xl bg-purple-500/10 border border-purple-400/30">
  <div class="text-2xl font-bold text-purple-400 w-8">3</div>
  <div>
    <div class="font-bold">確認してみよう！</div>
  </div>
</div>

</div>

---
layout: default
---

# Skybox とは？

<div class="text-lg opacity-80 mt-1">
  巨大な球でプレイヤーを囲み、内側にパノラマ画像を貼って空や背景を表現するしくみです
</div>

<div class="grid grid-cols-2 gap-5 mt-5">

<div class="space-y-4">

<div class="p-4 rounded-xl bg-purple-500/10 border border-purple-400/30">
  <div class="font-bold text-purple-300 text-lg">しくみ</div>
  <div class="text-sm opacity-80 mt-2 space-y-1">
    <div>1. 360° パノラマ画像（HDRI）を用意する</div>
    <div>2. シーンに巨大な球体（Sphere）を置く</div>
    <div>3. 球の<b>内側</b>にパノラマ画像を貼り付ける</div>
    <div>4. カメラが球の中心にいるので、どこを見ても空に見える</div>
  </div>
</div>

<div class="p-3 rounded-xl bg-purple-500/10 border border-purple-400/30">
  <div class="font-bold text-purple-300 text-sm">HDRI（Equirectangular）画像</div>
  <div class="text-xs opacity-80 mt-1">360° 全方位を 1 枚の長方形画像に展開した形式。<code>.jpg</code> や <code>.hdr</code> で配布されています</div>
</div>

</div>

<div class="space-y-4">

<div class="rounded-xl overflow-hidden border border-purple-400/30 bg-purple-500/5">
  <img src="/feature-shots/polyhaven-hdris.png" class="w-full h-32 object-cover" alt="Poly Haven" />
  <div class="p-3">
    <b class="text-purple-300">Poly Haven</b>
    <div class="text-xs opacity-80 mt-1">無料 CC0 の HDRI 素材が豊富</div>
  </div>
</div>

<div class="p-3 rounded-lg bg-green-500/10 border-l-4 border-green-400 text-sm">
  テンプレートには東京駅の HDRI（<code>tokyo-station.jpg</code>）が入っています
</div>

</div>

</div>

---
layout: default
---

# Skybox を設定してみよう！

<div class="text-sm opacity-80 mb-3">
  World.tsx で <b>2 箇所</b>のコメントを探してみてください
</div>

```tsx
// ↓ この 2 行のコメントを外す
const sky = useTexture(`${baseUrl}tokyo-station.jpg`)
sky.mapping = THREE.EquirectangularReflectionMapping

// ↓ この JSX コメントも外す
<mesh scale={[-1, 1, 1]}>
  <sphereGeometry args={[50, 32, 16]} />
  <meshBasicMaterial map={sky} side={THREE.BackSide} />
</mesh>
```

<div class="grid grid-cols-5 gap-5 mt-3">

<div class="col-span-3">
  <div class="p-3 rounded-lg bg-yellow-500/15 border-2 border-yellow-400/60 text-sm space-y-2">
    <div><b class="text-yellow-300">1.</b> JS コメント（<code class="text-yellow-300">//</code>）を 2 行削除</div>
    <div><b class="text-yellow-300">2.</b> JSX コメント（<code class="text-yellow-300">{/*</code> <code class="text-yellow-300">*/}</code>）を 1 箇所削除</div>
    <div><b class="text-yellow-300">3.</b> ファイルを保存（<kbd class="px-1 py-0.5 rounded bg-white/10 text-xs">Ctrl+S</kbd>）</div>
  </div>
</div>

<div class="col-span-2">
  <div class="p-3 rounded-lg bg-purple-500/10 border border-purple-400/30">
    <div class="text-sm font-bold text-purple-300 mb-2">終わったらやってみよう！</div>
    <div class="text-xs opacity-80 space-y-2">
      <div>Poly Haven から別の HDRI をダウンロードして <code>public/</code> に入れてみよう</div>
      <div><code>tokyo-station.jpg</code> のファイル名を変えてみよう → 空が変わる</div>
    </div>
  </div>
</div>

</div>

---
layout: default
---

# Step 3 — 確認してみよう

<div class="text-lg opacity-80 mt-1">
  保存したら開発画面を見てみましょう
</div>

<div class="flex justify-center mt-6">
  <div class="w-3/4">
    <img src="/step-shots/step-03-all.png" class="w-full rounded-lg border-2 border-purple-400" alt="Step 3 の結果" />
  </div>
</div>

<div class="mt-4 p-3 rounded-lg bg-green-500/10 border-l-4 border-green-400 text-center text-lg">
  空が表示されたら完成！ おめでとうございます
</div>

<div class="mt-3 p-2 rounded bg-purple-500/10 border-l-4 border-purple-400 text-xs text-center">
  好きな HDRI を <code>public/</code> に置いてファイル名を変えれば、空を自由にカスタマイズできます
</div>


---
layout: default
---

# 応用

<div class="text-sm opacity-80 mt-1">
  早めに終わった方・もっと作りたい方はXRIFTのコンポーネントを使ってみよう！
  例えば、このようなことができます。
</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="rounded-xl overflow-hidden border border-purple-400/30 bg-purple-500/5">
  <img src="/feature-shots/screen-share.png" class="w-full h-24 object-cover" alt="画面共有" />
  <div class="p-3">
    <div class="font-bold text-purple-300 text-lg">画面共有</div>
    <div class="text-sm opacity-80">他のユーザーと画面をリアルタイム共有</div>
  </div>
</div>

<div class="rounded-xl overflow-hidden border border-purple-400/30 bg-purple-500/5">
  <img src="/feature-shots/live-stream.png" class="w-full h-24 object-cover" alt="ライブ配信" />
  <div class="p-3">
    <div class="font-bold text-purple-300 text-lg">ライブ配信</div>
    <div class="text-sm opacity-80">PebbleChat 経由で HLS 配信を表示</div>
  </div>
</div>

<div class="rounded-xl overflow-hidden border border-purple-400/30 bg-purple-500/5">
  <img src="/feature-shots/portal.png" class="w-full h-24 object-cover" alt="ポータル" />
  <div class="p-3">
    <div class="font-bold text-purple-300 text-lg">ワールドポータル</div>
    <div class="text-sm opacity-80">別のワールドへ移動できるゲートを設置</div>
  </div>
</div>

<div class="rounded-xl overflow-hidden border border-purple-400/30 bg-purple-500/5">
  <img src="/feature-shots/mirror.png" class="w-full h-24 object-cover" alt="ミラー" />
  <div class="p-3">
    <div class="font-bold text-purple-300 text-lg">ミラー</div>
    <div class="text-sm opacity-80">リアルタイム反射面を設置</div>
  </div>
</div>

</div>

<div class="mt-3 p-2 rounded-lg bg-purple-500/10 border-l-4 border-purple-400 text-sm">
  このドキュメントをもとに実装してみよう！: <a href="https://docs.xrift.net/world-components/components" class="text-purple-300">https://docs.xrift.net/world-components/components</a>
</div>

---
layout: section
class: text-center
---

<div class="flex flex-col items-center justify-center h-full">

<div class="text-base font-mono text-purple-300/70 tracking-widest mb-4">PART 3 / 3</div>

# アップロードして公開



</div>

<style>
h1 {
  font-size: 4.5rem !important;
  color: #a78bfa;
  font-weight: 800;
}
</style>

---
layout: default
---

# サムネイルを作ろう

<div class="text-lg opacity-80 mt-1">
  アップロードするとワールド一覧に表示される画像です
</div>

<div class="grid grid-cols-2 gap-6 mt-5">

<div class="space-y-4">

<div class="p-4 rounded-xl bg-purple-500/10 border border-purple-400/30">
  <div class="font-bold text-purple-300 text-xl mb-2">作り方</div>
  <div class="space-y-2 text-base">
    <div class="flex items-start gap-2"><span class="text-purple-300 font-bold">①</span><span>ブラウザでワールドを表示</span></div>
    <div class="flex items-start gap-2"><span class="text-purple-300 font-bold">②</span><span>いい角度でスクリーンショット</span></div>
    <div class="flex items-start gap-2"><span class="text-purple-300 font-bold">③</span><span><code>public/thumbnail.png</code> として保存</span></div>
  </div>
</div>

<div class="p-3 rounded-lg bg-purple-500/10 border-l-4 border-purple-400 text-base">
  推奨サイズ：<code class="text-purple-300 font-bold">1280 x 700</code> px
</div>

</div>

<div class="p-5 rounded-xl bg-slate-500/10 border border-slate-400/30 flex items-center justify-center">
  <div class="text-center">
    <div class="text-6xl opacity-30 mb-3">🖼</div>
    <div class="text-base opacity-60">ワールドのスクリーンショットが<br/>サムネイルになります</div>
    <div class="mt-3 font-mono text-sm text-slate-400">1280 x 700 px</div>
  </div>
</div>

</div>

---
layout: default
---

# ビルド & アップロード

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="text-xl">

### 1. プロダクションビルド

```bash
npm run build
```

### 2. XRift にアップロード

```bash
xrift upload world
```

</div>

<div class="p-5 rounded-xl bg-purple-500/10 border border-purple-400/30 text-base">

<div class="font-bold text-purple-300 mb-3 text-xl">初回アップロードの流れ</div>

1. タイトルと説明を入力
2. 自動でコード審査（通常数分で完了）
3. 審査通過後に公開される
4. 発行された URL を共有すれば誰でも訪問可能

<div class="mt-4 p-3 rounded-lg bg-purple-500/20 border-l-4 border-purple-400 text-sm">
  これが今日の最終ゴール！<br/><b>自分の URL</b> を持って帰りましょう
</div>

</div>

</div>

---
layout: default
---

# アップロードできた！

<div class="text-lg opacity-80 mt-1">ターミナルに「Upload completed」と出れば成功です</div>

<div class="grid grid-cols-3 gap-5 mt-5">

<div class="text-center">
  <div class="text-purple-300 font-bold text-lg mb-2">① アップロード完了</div>
  <img src="/step-shots/upload-complete.png" class="w-full rounded-lg border border-purple-400/30" alt="upload complete" />
  <div class="text-xs opacity-70 mt-2">ターミナルに完了メッセージが表示</div>
</div>

<div class="text-center">
  <div class="text-purple-300 font-bold text-lg mb-2">② マイワールドに表示</div>
  <img src="/step-shots/myworld-list.png" class="w-full rounded-lg border border-purple-400/30" alt="my worlds" />
  <div class="text-xs opacity-70 mt-2">XRift のマイページにワールドが並ぶ</div>
</div>

<div class="text-center">
  <div class="text-purple-300 font-bold text-lg mb-2">③ インスタンスを作成</div>
  <img src="/step-shots/create-instance.png" class="w-full rounded-lg border border-purple-400/30" alt="create instance" />
  <div class="text-xs opacity-70 mt-2">「新しいインスタンスを作成」で<br/>ワールドに入れる</div>
</div>

</div>

<div class="mt-5 p-3 rounded-lg bg-purple-500/10 border-l-4 border-purple-400 text-base">
  ここまでできたら今日のゴール達成です！
</div>

---
layout: section
class: text-center
---

<div class="flex flex-col items-center justify-center h-full">

# みんなで遊ぼう！

<div class="text-2xl opacity-80 mt-6">
  できた人から順番に、お互いのワールドを見に行きましょう
</div>

<div class="mt-10 space-y-4 text-xl opacity-80">
  <div>順番はこちらで決めるので、リラックスして待っていてください</div>
  <div>みんなでワールドを巡回して感想を言い合いましょう！</div>
</div>

</div>

<style>
h1 {
  font-size: 4rem !important;
  color: #a78bfa;
  font-weight: 800;
}
</style>



---
layout: default
---

# まとめ

<div class="mt-8 space-y-5 text-xl">

<div class="p-5 rounded-xl bg-purple-500/10 border border-purple-400/30">
  <div class="font-bold text-purple-300 text-2xl">今日やったこと</div>
  <div class="mt-2 opacity-90">環境構築 → プロジェクト作成 → コード編集 → アップロードの流れを体験しました</div>
</div>

<div class="p-5 rounded-xl bg-purple-500/10 border border-purple-400/30">
  <div class="font-bold text-purple-300 text-2xl">次にやってみたいこと</div>
  <div class="mt-2 opacity-90">3D モデル（.glb）を追加する / 物理演算で遊ぶ / 動画を流す / 他のユーザーとの連携</div>
</div>

<div class="p-5 rounded-xl bg-purple-500/10 border border-purple-400/30">
  <div class="font-bold text-purple-300 text-2xl">困ったときは</div>
  <div class="mt-2 opacity-90">Discord で質問、ドキュメントを読む、他のワールドのソースを参考にする</div>
</div>

</div>

---
layout: default
---

# 学習リソース

<div class="grid grid-cols-2 gap-6 mt-8 text-xl">

<div class="p-5 rounded-xl bg-purple-500/10 border border-purple-400/30">
  <div class="font-bold text-purple-300 text-2xl">公式ドキュメント</div>
  <div class="mt-2 opacity-80"><a href="https://docs.xrift.net">docs.xrift.net</a></div>
  <div class="text-base opacity-60 mt-1">全コンポーネントとフックの一覧</div>
</div>

<div class="p-5 rounded-xl bg-purple-500/10 border border-purple-400/30">
  <div class="font-bold text-purple-300 text-2xl">Discord</div>
  <div class="mt-2 opacity-80">参加者と開発者のコミュニティ</div>
  <div class="text-base opacity-60 mt-1">質問、雑談、告知など</div>
</div>

<div class="p-5 rounded-xl bg-purple-500/10 border border-purple-400/30">
  <div class="font-bold text-purple-300 text-2xl">GitHub</div>
  <div class="mt-2 opacity-80"><a href="https://github.com/WebXR-JP">github.com/WebXR-JP</a></div>
  <div class="text-base opacity-60 mt-1">xrift-cli / xrift-world-components</div>
</div>

<div class="p-5 rounded-xl bg-purple-500/10 border border-purple-400/30">
  <div class="font-bold text-purple-300 text-2xl">React Three Fiber</div>
  <div class="mt-2 opacity-80"><a href="https://r3f.docs.pmnd.rs">r3f.docs.pmnd.rs</a></div>
  <div class="text-base opacity-60 mt-1">3D 表現の基礎を深く学ぶ</div>
</div>

</div>

---
layout: default
---

# 明日の近況報告会に参加しませんか？

<div class="grid grid-cols-[1.2fr_1fr] gap-6 mt-4">

<div class="space-y-4">

<div class="p-4 rounded-xl bg-purple-500/10 border border-purple-400/30">
  <div class="text-2xl font-bold text-purple-300 mb-2">近況報告会</div>
  <div class="space-y-2 text-lg">
    <div class="flex items-center gap-3"><span class="text-purple-300 font-bold w-12">日時</span><span>明日（金曜日）21:00〜</span></div>
    <div class="flex items-center gap-3"><span class="text-purple-300 font-bold w-12">場所</span><span>XRift 上のワールド</span></div>
    <div class="flex items-center gap-3"><span class="text-purple-300 font-bold w-12">主催</span><span>@nisshi_dev（WebXR JP）</span></div>
  </div>
</div>

<div class="p-3 rounded-lg bg-purple-500/10 border-l-4 border-purple-400 text-base">
  個人開発、3DGS、WebGPU など最近やっていることを気軽に共有する会です。<br/>
  明日 21:00 にインスタンスが開かれるので、ぜひ遊びに来てください！
</div>

</div>

<div class="rounded-xl overflow-hidden border-2 border-purple-400/30">
  <img src="/feature-shots/kinkyo-event.png" class="w-full" alt="近況報告会の様子" />
  <div class="p-2 text-center text-sm opacity-70 bg-purple-500/10">
    前回の近況報告会の様子（VRChat）
  </div>
</div>

</div>

---
layout: center
class: text-center
---

<img src="/xrift-logo.svg" class="h-24 mb-8 mx-auto opacity-95" alt="XRift" />

# ありがとうございました

<div class="text-2xl mt-6 opacity-80">
  質疑応答タイム
</div>

<div class="mt-12 text-lg opacity-70">
  感想や作ったワールドは <span class="text-purple-300 font-bold">#XRift</span> で SNS に投稿してください
</div>

<style>
h1 {
  background-color: #8b5cf6;
  background-image: linear-gradient(45deg, #8b5cf6 10%, #c4b5fd 50%, #a78bfa 100%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  font-size: 5rem !important;
  font-weight: 800;
}
</style>
