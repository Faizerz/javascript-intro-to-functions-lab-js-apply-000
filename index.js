function shout(string) {
   return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function longShout(string){
  string = string.toUpperCase();
  console.log(string);
}
longShout(string);


function longWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if(string === "I love you, Grandma."){
    return "I love you, too.";
  }
}