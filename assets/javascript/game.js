const word = ["Michael Jackson", "Madonna", "Prince", "U2", "Van Halen", "Bruce Springsteen"];

var randNum = Math.floor(Math.random() * word.length);
var chosenWord = word[randNum];
var underScore = [];


function generateUnderScore () {
    for(var i = 0; i < chosenWord.length; i++) {
       underScore.push("_"); 
    }
   return underScore;
}



console.log(generateUnderScore());


document.addEventListener("keypress", (event) => {
    var keycode = event.keyCode;
    var keyword = String.fromCharCode(event.keycode);
    console.log(chosenWord.indexOf(keyword));
    if(keyword.indexOf(chosenWord) > -1) {
        console.log(true);
    }
});

