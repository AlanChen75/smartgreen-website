# Smart Green 響應式網站

這是一個為 Smart Green 智慧節能與永續顧問服務公司建立的響應式網站。

## 網站特色

- **響應式設計**：完美適配桌面、平板和手機裝置
- **現代化UI**：使用 Tailwind CSS 和 shadcn/ui 組件庫
- **流暢動畫**：使用 Framer Motion 實現滑入淡出效果
- **綠色主題**：主色調為綠色 (#4CAF50)，符合永續環保理念
- **中文介面**：全中文導覽和內容

## 網站架構

### 頁面結構
1. **首頁** (`/`) - 主視覺、公司簡介與服務概覽
2. **服務介紹** (`/services`) - 四大服務項目詳細說明
3. **案例展示** (`/cases`) - 成功案例與可展開的詳細資訊
4. **關於我們** (`/about`) - 團隊介紹、使命願景與發展歷程
5. **聯絡我們** (`/contact`) - 聯絡表單與公司資訊

### 四大服務項目
- **能源再造**：提升能源使用效率，導入智慧化系統
- **企業減碳**：協助碳盤查、碳管理與減碳路徑規劃
- **智慧製造**：整合工業數據與AI，打造低碳智慧工廠
- **建築低碳**：從建築設計到營運，建構淨零碳排路徑

## 技術規格

### 前端技術
- **React 18** - 現代化前端框架
- **Vite** - 快速建置工具
- **Tailwind CSS** - 實用優先的CSS框架
- **shadcn/ui** - 高品質UI組件庫
- **Framer Motion** - 動畫庫
- **React Router** - 路由管理
- **Lucide React** - 圖標庫

### 開發環境
- Node.js 20.18.0
- pnpm 包管理器

## 安裝與執行

### 1. 安裝依賴
```bash
cd smart-green-website
pnpm install
```

### 2. 啟動開發伺服器
```bash
pnpm run dev
```
網站將在 http://localhost:5173 啟動

### 3. 建置生產版本
```bash
pnpm run build
```
建置檔案將輸出到 `dist` 目錄

### 4. 預覽生產版本
```bash
pnpm run preview
```

## 功能特色

### 響應式設計
- 桌面版：完整的多欄佈局
- 平板版：適中的佈局調整
- 手機版：單欄佈局，漢堡選單

### 互動功能
- **導覽列**：響應式導覽，活動頁面高亮顯示
- **案例展開**：點擊案例卡片可展開詳細資訊
- **聯絡表單**：完整的表單驗證與提交功能
- **滑入動畫**：頁面滾動時的元素動畫效果

### 設計風格
- **清爽專業**：大量留白，簡潔設計
- **卡片式佈局**：服務與案例採用卡片呈現
- **綠色主題**：符合環保永續理念
- **現代化圖標**：使用 Lucide 圖標庫

## 檔案結構

```
smart-green-website/
├── public/                 # 靜態資源
├── src/
│   ├── assets/            # 圖片資源
│   │   └── logo.jpg       # 公司Logo
│   ├── components/        # React組件
│   │   ├── ui/           # UI組件庫
│   │   ├── Navbar.jsx    # 導覽列
│   │   ├── Home.jsx      # 首頁
│   │   ├── Services.jsx  # 服務介紹
│   │   ├── Cases.jsx     # 案例展示
│   │   ├── About.jsx     # 關於我們
│   │   └── Contact.jsx   # 聯絡我們
│   ├── App.jsx           # 主應用程式
│   ├── App.css           # 樣式檔案
│   └── main.jsx          # 入口檔案
├── package.json          # 專案配置
└── README.md            # 說明文件
```

## 自訂與修改

### 修改公司資訊
- 聯絡資訊：編輯 `src/components/Contact.jsx`
- 團隊資訊：編輯 `src/components/About.jsx`
- 服務內容：編輯 `src/components/Services.jsx`

### 修改樣式
- 主色調：編輯 `src/App.css` 中的 CSS 變數
- 佈局調整：修改各組件中的 Tailwind CSS 類別

### 新增頁面
1. 在 `src/components/` 建立新組件
2. 在 `src/App.jsx` 中新增路由
3. 在 `src/components/Navbar.jsx` 中新增導覽連結

## 部署建議

### 靜態網站託管
- Vercel
- Netlify
- GitHub Pages

### 自架伺服器
1. 執行 `pnpm run build`
2. 將 `dist` 目錄內容上傳到網頁伺服器
3. 配置伺服器支援 SPA 路由

## 瀏覽器支援

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 授權

此專案為 Smart Green 公司專用網站，版權所有。

## 聯絡資訊

如有任何問題或需要技術支援，請聯絡：
- 電話：+886-2-1234-5678
- 電子郵件：info@smartgreen.com.tw
- 地址：台北市信義區信義路五段7號 台北101大樓35樓

