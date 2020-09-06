'use strict';
chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: '0.0.0.0'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);

});
});
chrome.runtime.onMessage.addListener(
  function(request, sender) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
                var tabId = sender.tab.id;
    if (request.event == "blurred"){
      chrome.pageAction.setIcon(
        {
        tabId:tabId,
        path: {
      "16": "images/inactive/icon.png",
      "32": "images/inactive/icon32.png",
      "48": "images/inactive/icon48.png",
      "128": "images/inactive/icon128.png"
    }}); 
  }
  if (request.event == "focused"){
    chrome.pageAction.setIcon({
      tabId:tabId,
      path: {
    "16": "images/inactive/icon.png",
    "32": "images/inactive/icon32.png",
    "48": "images/inactive/icon48.png",
    "128": "images/inactive/icon128.png"
  }}); 
  }
  });
/*
chrome.pageAction.onClicked.addListener(function(tab) {
  var found = false;
  var tabId;
  chrome.tabs.query({}, function (tabs) {
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i].url.search("a.impartus.com") > -1){
        found = true;
        tabId = tabs[i].id;
      }
    }
    if ( found == false){

    }
    else
    {
      chrome.tabs.update(tabId, {active:true});
    }
    
  });
});
*/