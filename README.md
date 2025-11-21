# Frontend Project — Vite + TypeScript 專案

本專案是一個使用 **Vite** 作為開發工具，並搭配 **TypeScript** 的前端專案。  
結構清晰、啟動快速，適合作為前端開發模板或練習專案。

---

## 專案結構

```
├── public/ # 靜態資源（不會被編譯）
├── src/ # 專案主要程式碼
│
├── index.html # 入口 HTML（由 Vite 提供服務）
├── package.json # 專案依賴與腳本
├── package-lock.json # 依賴鎖定
├── tsconfig.json # TypeScript 設定
├── tsconfig.app.json # App TS 設定
├── tsconfig.node.json # Node 環境 TS 設定
├── vite.config.ts # Vite 設定檔
├── eslint.config.js # ESLint 設定
└── README.md # 專案說明文件
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


