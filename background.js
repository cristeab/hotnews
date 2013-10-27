chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.query({}, function(tabs) {
    for (var i = 0; i < tabs.length; i++) {
      if (0 == tabs[i].url.indexOf("http://www.hotnews.ro")) {
        chrome.tabs.update(tabs[i].id, {selected: true});
        break;
      }
    }
    if (i == tabs.length) {
      chrome.tabs.create({'url': "http://www.hotnews.ro"});
    }
  });
});

