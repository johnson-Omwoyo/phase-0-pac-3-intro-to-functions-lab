function shout(x) {
  return x.toUpperCase();
}

function whisper(x) {
  return x.toLowerCase();
}

function logShout(x) {
  console.log(x.toUpperCase());
}

function logWhisper(x) {
  console.log(x.toLowerCase());
}
function sayHiToHeadphonedRoommate(x) {
  if(x==="Let\'s have dinner together!")
   {
     return "I would love to!"
   }
 else if (x !== x.toUpperCase()) {
    return "I can\'t hear you!";
  } else if (x === x.toUpperCase()) {
    return "YES INDEED!";
  }
}
// function logShout(x) {
//   console.log(x);
// }
// function logWhisper(x) {
//   console.log(x);
// }
