var i = 0;
var text = 'The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of sex.';
var speed = 40;

function typewriter() {
  if (i < text.length) { 
    document.getElementById("typewriterText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typewriter, speed);
  } else {
    setTimeout(() => {
      typewriterText.innerHTML = ""
      i = 0
      typewriter()
    }, 5000);
  }
}
