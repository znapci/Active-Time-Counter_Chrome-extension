var secs = 0;
var interval = 0;
function timerHandler() {
    secs++;
    }

function startCounter() {
    interval = window.setInterval(timerHandler, 1000);
}
function stopCounter() {
    window.clearInterval(interval);
   }

window.onblur = function() {
    chrome.runtime.sendMessage({event: "blurred"}, function(response) {
        console.log(response.msg);
        stopCounter();
        var port = chrome.runtime.connect({name: "time"});
        port.postMessage({time: secs});
      });

}
window.onfocus = function() {
    chrome.runtime.sendMessage({event: "focused"}, function(response){
        console.log(response.msg);
        startCounter();
    });

}
startCounter();
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