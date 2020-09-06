
chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name == "time");

    port.onMessage.addListener(function(msg) {
        var secs;
        secs = msg.time;
        var mins = Math.floor(secs / 60);
        var seconds = secs-mins*60;
        document.getElementById("jkhgfID").innerHTML = seconds;
        document.getElementById("ldhrhnz").innerHTML = mins;
    });
  });
