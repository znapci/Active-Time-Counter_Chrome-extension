window.onblur = function() {
    chrome.runtime.sendMessage({event: "blurred"}, function() {
      });
}
window.onfocus = function() {
    chrome.runtime.sendMessage({event: "focused"}, function(){
        
    });
}
/*
var inFocus = true;  // global boolean to keep track of state
chrome.windows.onFocusChanged.addListener(function(window) {
    if (window == chrome.windows.WINDOW_ID_NONE || window == -1) {
        inFocus = false;
        console.log("not in focus");
    } else {
        inFocus = true;
        console.log("in focus");
    }
});
*/