var displayScript = document.getElementById("script-returned");
var scriptButton = document.getElementById("script-button");
var copyButton = document.getElementById("copy-button");

if (scriptButton) {
    scriptButton.addEventListener("click", generateScript);
}

function generateScript() {
    var recipient = document.getElementById("recipient-name").value;
    var sender = document.getElementById("your-name").value;
    var issue = document.getElementById("issue").value;

    displayScript.style.display = 'block';
    displayScript.innerHTML = "Hi " + recipient + " it's " + sender + ". Remember that your vote matters! Voting is important because of issues like " + issue + ".";
    displayScript = "Hi " + recipient + " it's " + sender + ". Remember that your vote matters! Voting is important because of issues like " + issue + ".";
    copyButton.style.display = 'block';
    scriptButton.style.display = 'none';
}

var copyButton = document.getElementById("copy-button");
var copySuccessMessage = document.getElementById("copy-success");

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

    copySuccessMessage.style.display = 'block';
    
    //copyButton.textContent = "Message Copied to Clipboard!";

    // setTimeout(() => {
    //     copyButton.textContent = "Copy Your Message";
    // }, 3000)

    // alert("Personalized message successfully copied to clipboard!");
}

var quoteList = [
    "\"Failure is impossible.\"",
    "\"The only people who know what girls want are girls.\"",
    "\"Any great change must expect opposition, because it shakes the very foundation of privilege.\"",
    "\"I know nothing of man's rights, or woman's rights; human rights are all that I recognize.\"",
    "\"Women belong in all places where decisions are being made. It shouldn't be that women are the exception.\"",
]

var authorList = [
    "-Susan B. Anthony",
    "-Malala Yousafzai",
    "-Lucretia Mott",
    "-Sarah Moore Grimke",
    "-Ruth Bader Ginsburg"
]

var quote = document.getElementById("quote");

var author = document.getElementById("author")

var button = document.getElementById("inspire-me");

var count = 0;

button.addEventListener("click", displayQuote);

function displayQuote() {
    quote.innerHTML = quoteList[count];
    author.innerHTML = authorList[count];

    count++;

    if (count == quoteList.length) {
        count = 0;
    }
}