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