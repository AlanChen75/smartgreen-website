# GitHub Pages 部署說明

## 自動部署設定

本專案已配置 GitHub Actions 自動部署到 GitHub Pages。

### 步驟 1：建立 GitHub Repository

1. 登入 GitHub 並建立新的 repository
2. Repository 名稱建議使用：`smart-green-website`
3. 設定為 Public repository（GitHub Pages 免費版需要）

### 步驟 2：上傳專案檔案

```bash
# 初始化 Git repository
git init

# 添加所有檔案
git add .

# 建立初始 commit
git commit -m "Initial commit: Smart Green website"

# 連接到 GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/smart-green-website.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 步驟 3：啟用 GitHub Pages

1. 進入 GitHub repository 設定頁面
2. 點選左側選單的 "Pages"
3. 在 "Source" 選項中選擇 "GitHub Actions"
4. 儲存設定

### 步驟 4：等待部署完成

- 推送程式碼後，GitHub Actions 會自動開始建置和部署
- 可在 "Actions" 頁籤查看部署進度
- 部署完成後，網站將可在以下網址存取：
  `https://YOUR_USERNAME.github.io/smart-green-website/`

## 手動部署（備用方案）

如果自動部署有問題，可以使用手動部署：

### 步驟 1：建置專案

```bash
# 安裝依賴
pnpm install

# 建置生產版本
pnpm run build
```

### 步驟 2：部署到 GitHub Pages

```bash
# 安裝 gh-pages 套件
npm install -g gh-pages

# 部署 dist 目錄到 gh-pages 分支
gh-pages -d dist
```

## 自訂網域設定（選用）

如果您有自己的網域：

1. 在 repository 根目錄建立 `CNAME` 檔案
2. 檔案內容為您的網域名稱（例如：`www.smartgreen.com.tw`）
3. 在網域 DNS 設定中添加 CNAME 記錄指向 `YOUR_USERNAME.github.io`

## 更新網站內容

要更新網站內容：

1. 修改相關的 React 組件檔案
2. 提交並推送變更到 GitHub
3. GitHub Actions 會自動重新部署

## 常見問題

### Q: 網站顯示 404 錯誤
A: 確認 GitHub Pages 設定正確，且選擇了 "GitHub Actions" 作為來源

### Q: 樣式或圖片無法載入
A: 檢查 `vite.config.js` 中的 `base` 設定是否正確

### Q: 部署失敗
A: 查看 Actions 頁籤的錯誤訊息，通常是依賴安裝或建置過程出現問題

### Q: 想要使用不同的 repository 名稱
A: 修改 `vite.config.js` 中的 `base` 路徑為您的 repository 名稱

## 技術支援

如需技術支援，請檢查：
1. GitHub Actions 執行日誌
2. 瀏覽器開發者工具的錯誤訊息
3. 確認所有檔案都已正確上傳到 GitHub

