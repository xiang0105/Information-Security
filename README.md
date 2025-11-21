# Frontend Project — Vite + TypeScript 專案

本專案是一個使用 **Vite** 作為開發工具，並搭配 **TypeScript** 的前端專案。  
結構清晰、啟動快速，適合作為前端開發模板或練習專案。

---

## 專案結構

```
├── public/ # 靜態資源（不會被編譯）
├── src/ # 前端主要程式碼
│ ├── Css/ # 全域或區域樣式
│ ├── Element/ # 小型元件 (Components)
│ ├── Page/ # 頁面級元件
│ ├── assets/ # 圖片 / icon / 靜態資源
│ │
│ ├── App.css # App 根組件樣式
│ ├── App.tsx # App 根組件
│ ├── index.css # 全域樣式
│ ├── main.tsx # React 入口文件
│ └── vite-env.d.ts # Vite TypeScript 型別定義
│
├── index.html # 專案入口 HTML
├── package.json # 套件管理
├── package-lock.json # 套件版本鎖定
├── tsconfig.json # TS 設定
├── tsconfig.app.json # App TS 設定
├── tsconfig.node.json # Node TS 設定
├── vite.config.ts # Vite 設定
└── README.md # 專案說明
```



---

## 使用技術

- **Vite** — 極快速的前端打包工具  
- **TypeScript** — 強型別 JavaScript  
- **ESLint** — 程式碼品質檢查  
- **Node.js / npm** — 套件管理與開發環境  

---

## 安裝與執行

### 1️安裝依賴
確保已安裝 Node.js（建議 v16+）  
然後執行：

```sh
npm install
```

啟動後可在瀏覽器瀏覽
``` bruh
http://localhost:5173
```

TypeScript打包指令
```
npm run build
```


