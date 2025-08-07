# CLAUDE.md

このファイルは、このリポジトリでコードを扱う際のClaude Code (claude.ai/code) への指針を提供します。

## プロジェクト概要

三重クレーンのクレーンレンタル会社の静的ウェブサイトです。Next.js 14とTypeScriptで構築され、会社のクレーン在庫とサービスを紹介しています。

## 開発コマンド

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバーの起動
npm run start

# リントの実行
npm run lint
```

## アーキテクチャ

### 技術スタック
- **フレームワーク**: Next.js 14.0.4 (App Router)
- **言語**: TypeScript 5
- **スタイリング**: CSS Modules (CSS-in-JSライブラリなし)
- **フォント**: Inter (Google Fonts)
- **React**: バージョン 18

### プロジェクト構造
- `/app` - Next.js App Routerのページとコンポーネント
  - `/about` - 会社情報ページ
  - `/contact` - 電話リンク付きの問い合わせページ
  - `/craneList` - クレーン在庫表示
  - `/home` - ランディングページ
  - `/ui` - 共有コンポーネント (AppHeader, Footer)
  - `/data` - データモデル (Crane.ts)
- `/public` - 静的アセット (画像)
- すべてのコンポーネントはServer Components ('use client'ディレクティブなし)

### 主要コンポーネント
- **AppHeader** (`app/ui/appHeader.tsx`) - モバイルメニュー付きのスティッキーナビゲーション
- **Footer** (`app/ui/footer.tsx`) - ナビゲーションリンク付きのサイトフッター
- **Craneモデル** (`app/data/Crane.ts`) - クレーン仕様のTypeScriptクラス

### スタイリング方針
- コンポーネントスコープのスタイルにCSS Modules使用
- グローバルスタイルは `app/globals.css` に記述
- プライマリカラー: `#746C99` (紫), `#FFCC33` (黄色)
- 最大コンテンツ幅: 1250px
- メディアクエリによるモバイルレスポンシブ対応

### データ管理
- コンポーネント内にハードコードされた静的データ
- APIルートやデータベース統合なし
- クレーン仕様はTypeScriptオブジェクトとして定義

### 重要な注意事項
- 日本語サイト (lang="ja")
- 問い合わせ機能は直接電話をかける `tel:` リンクを使用
- テストフレームワーク未設定
- コードフォーマッター (Prettier) 未設定
- ESLintはNext.jsルールで設定済み

## 現在の開発状況
- クレーン一覧のモバイルレスポンシブ対応作業
- 問い合わせページをクリックで電話起動するよう変更
- ホームページの車両写真のスタイリング更新