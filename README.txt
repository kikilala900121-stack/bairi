# 百日繪｜Android 平板 PWA

這是「不用電腦、不用 Android Studio」版本。

## 在 Android 平板安裝
1. 先把這個資料夾放到一個 HTTPS 靜態網站。
2. 用 Chrome 開啟網站。
3. Chrome 選單 →「安裝應用程式」或「新增至主畫面」。
4. 之後從主畫面的「百日繪」圖示啟動。

注意：不能直接從檔案管理器開 index.html。YouTube Error 153 要求嵌入播放器有 HTTP Referer／API Client identification；HTTPS 網站可提供正常的瀏覽器來源環境。

## 功能
- 自動搜尋 YouTube
- 隨機影片
- 隨機時間
- 100 日紀錄
- PWA 主畫面圖示
- 平板介面
- YouTube 備援開啟

## YouTube API Key
仍需要 YouTube Data API v3 Key，因為程式需要搜尋 YouTube 影片。