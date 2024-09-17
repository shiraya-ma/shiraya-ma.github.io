'use strict';
import { $ } from 'bun';
import { resolve } from 'path';

const __rootdir = resolve(__dirname, '..');

$.cwd(__rootdir);

// ビルドディレクトリ削除
await $`bunx rimraf ./docs`;

// TypeScriptのトランスパイル
await $`bunx tsc -b`;

// viteのビルド
await $`bunx vite build`;

// 404.htmlを生成
await $`cp ./docs/index.html ./docs/404.html`;

// ルートファイル作成
await $`touch ./docs/.nojekyll`;
