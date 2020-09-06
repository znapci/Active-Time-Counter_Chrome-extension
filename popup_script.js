
chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name == "time");

    port.onMessage.addListener(function(msg) {
        var secs;
        secs = msg.time;
        document.getElementById("jkhgfID").innerHTML = secs;
    });
  });
