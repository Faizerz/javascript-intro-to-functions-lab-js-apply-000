function shout(string) {
   return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

var longShout = shout("hello!");
console.log(longShout);



function longWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if(string === "I love you, Grandma."){
    return "I love you, too.";
  }
}