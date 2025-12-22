var displayScript = document.getElementById("script-returned");
var scriptButton = document.getElementById("script-button");

if (scriptButton) {
    scriptButton.addEventListener("click", generateScript);
}

function generateScript() {
    var recipient = document.getElementById("recipient-name").value;
    var sender = document.getElementById("your-name").value;
    var issue = document.getElementById("issue").value;

    displayScript.innerHTML = "Hi " + recipient + " it's " + sender + ". Remember that your vote matters! Voting is important because of issues like " + issue + ".";
    displayScript = "Hi " + recipient + " it's " + sender + ". Remember that your vote matters! Voting is important because of issues like " + issue + ".";
}

var copyButton = document.getElementById("copy-button");

if (copyButton) {
    copyButton.addEventListener("click", copyScriptText);
}

function copyScriptText() {
    var str = document.getElementById("script-element");
    var el = document.createElement("textarea");
    el.value = str;

    el.select();
    el.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(displayScript);
    
    alert("Personalized message successfully copied to clipboard!");
}