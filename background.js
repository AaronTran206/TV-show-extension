chrome.runtime.onInstalled.addListener((details) => {
  chrome.contextMenus.create({
    title: "Test Context Menu",
    id: "contextMenu1",
    contexts: ["page", "selection"],
  });
});

chrome.contextMenus.onClicked.addListener((e) => {
  chrome.tabs.create({
    url: `https://www.imdb.com/find?q=${e.selectionText}&ref_=nv_sr_sm`,
  });
});

console.log("background script running");
