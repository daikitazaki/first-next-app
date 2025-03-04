
![ヘッダー画像](/docs/img/header.png)

<br />

## サービスのURL
当アプリはトライアル機能の感覚で、登録せずにお試しいただけます.
https://first-next-app-qiqh-git-main-daiki-tazakis-projects.vercel.app

<br />

## はじめに
開発サーバーを起動するには、以下のコマンドを実行します。
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
ブラウザで http://localhost:3000 を開くと、動作を確認できます。

<br />

## 使用技術

| Category          | Technology Stack                                     |
| ----------------- | --------------------------------------------------   |
| Frontend          | TypeScript, Next.js, React                           |
| Backend           | TypeScript, Next.js                                  |
| Infrastructure    | Vercel                                               |
| Database          | Supabase                                             |
| etc.              | Git, GitHub                                          |

<br />

## npmのバージョン

```bash
npm -v
```
10.9.2

<br />

## .env.localの設定方法

.env.local に以下のように記述します。

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```
・NEXT_PUBLIC_ をつけた変数はクライアント側（ブラウザ）からもアクセス可能。

・それ以外の変数はサーバー側でのみ使用されます。

