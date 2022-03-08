chrome.runtime.onInstalled.addListener((details) => {
  chrome.contextMenus.create({
    title: "Search for TV Shows",
    id: "contextMenu1",
    contexts: ["page", "selection"],
  });
  chrome.contextMenus.create({
    title: "Text-to-Speech",
    id: "contextMenu2",
    contexts: ["page", "selection"],
  });
});

chrome.storage.local.set({
  shows: [],
});

chrome.contextMenus.onClicked.addListener((e) => {
  if (e.menuItemId === "contextMenu1") {
    fetch(`https://api.tvmaze.com/search/shows?q=${e.selectionText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        chrome.storage.local.set({
          shows: data,
        });
      });
  } else if (e.menuItemId === "contextMenu2") {
    chrome.tts.speak(e.selectionText, {
      lang: "ja",
      rate: 2,
    });
  }
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log(msg);
  console.log(sender);
  sendResponse("received message from background");
  chrome.tabs.sendMessage(
    sender.tab.id,
    "Got your message from the background!"
  );
});
