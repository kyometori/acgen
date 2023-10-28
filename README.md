# AC 訊息產生器
這個東西可以產生出一個供截圖用的，很像由用戶 AC0xRPFS001 送出的 Discord 訊息格式的東西。可以讓你用來偽造一句 AC0xRPFS001 沒說過的話來傳遍世界。

## 2.0 版
這個 2.0 其實只是改了工具而已，內容根本沒什麼差。[CRA](https://github.com/facebook/create-react-app) 被從專案中驅逐，改成直接使用 [Webpack](https://webpack.js.org/) 建構專案。如果你只是個使用者你應該感覺不到差異。

## 你用這東西幹嘛
我發現好像開始有人會去截圖我說過的話來對話，但這樣不覺得很累嗎？所以我就乾脆做個訊息產生器，讓有需要的人可以直接輸入然後截圖就好了。

還有，順便學習一下在 react 中處理表單的方式。

## 我也想要一個我的
自己做。   
你可以 fork 這份專案回去自行更改。   
名字的部分，注意 `/src/components/nameInput.js` 裡面的 `option`，只需要更改裡面的值就好了。注意 `value` 就是顯示出來的名字。接著到 `src/app.js` 將預設換為你的名字。   
頭像的部分，你需要把 `/src/asset` 裡面的東西換成你的頭像，接著去 `/src/renderer.js` 改成匯入你的頭像。然後要去 `/src/components/avatarInput.js` 去把選單的選項改成選擇你的頭像，最後也要到 `/src/app.js` 把預設也改成你的預設頭像就大功告成了，簡單吧。
最後還有一些預設行為（預設文字、附件）可以在 /src/default.json 改。

## 太難了我不會
那就等我想把他變成簡單就能用再說吧，或是找一位高手願意幫你改成你的格式。

## 我會欸，然後呢
喔你會喔，那太好了。接著你可以用 `yarn install` 下載所有你需要的東西，然後將 package.json 裡的 homepage 改成`""`，最後使用 `yarn build`，你的成品會在 dist/index.html，直接打開就好了。   
若你想要打包放上 Github Pages，要把 package.json 的 homepage 改成那個 Github Pages 的網址，然後確定你有跟一個遠端檔案庫連著後，一樣使用 `yarn build` 建出打包好的東西，再使用 `yarn deploy` 發布就好了。   

### build 失敗：Can't import the name export '...' from non EcmaScript module
如果你在 build 的時候他告訴你編譯失敗，且給了以上的理由，別擔心，我也碰到了。發生這種事時，請進入你的 `node_modules/@skyra/discord-components-react/dist`，將 `index.mjs` 改名為 `index.js`。之後往後退一層，打開他的 `package.json`，把你所有看到的 `index.mjs` 通通改成 `index.js`。在這之後重 build，應該就能成功編譯了。
