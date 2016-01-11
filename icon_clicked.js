chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({"url": "www/index.html" });
});
