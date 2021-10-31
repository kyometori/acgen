# AC 訊息產生器
這個東西可以產生出一個供截圖用的，很像由用戶 AC0xRPFS001 送出的 Discord 訊息格式的東西。可以讓你用來偽造一句 AC0xRPFS001 沒說過的話來傳遍世界。

## 你用這東西幹嘛
我發現好像開始有人會去截圖我說過的話來對話，但這樣不覺得很累嗎？所以我就乾脆做個訊息產生器，讓有需要的人可以直接輸入然後截圖就好了。

還有，順便學習一下在 react 中處理表單的方式。

## 我也想要一個我的
自己做。   
你可以 fork 這份專案回去，注意 /src/renderer.js 檔案，名字的部分只要改他就好了。   
頭像的部分，你需要把 /src/asset 裡面的東西換成你的頭像，接著去 /src/renderer.js 改成匯入你的頭像，接著到 /src/components/avatarInput.js 去把選單改成選你的頭像，最後再到 /src/app.js 把預設也改成你的預設頭像就好了，簡單吧。
最後還有一些預設行為（預設文字、附件）要去 /src/default.json 改。

## 太難了我不會
那就等我想把他變成簡單就能用再說吧，或是找一位高手願意幫你改成你的格式。

## 我會欸，然後呢
喔你會喔，那太好了。接著你可以用 `yarn install` 下載所有你需要的東西，然後使用 `yarn start` 來執行這個東西。   
若你想要打包放上 Github Pages，先到 package.json 把 homepage 改掉，然後確定你有跟一個遠端檔案庫連著後，使用 `yarn build` 建出打包好的東西，再使用 `yarn deploy` 發布就好了。
