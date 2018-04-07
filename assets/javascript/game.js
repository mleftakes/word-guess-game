var word = ["Plato", "Socrates", "Aristotle", "Seneca", "Hume", "Locke", "Descartes"];

var randNum = Math.floor(Math.random() * word.length);


var chosenWord = word[randNum];

var rightWord = [];
var wrongWord = [];
var underScore = [];

var docUnderScore = document.getElementsByClassName("underScore");
var docRightGuess = document.getElementsByClassName("rightGuess");
var docWrongGuess = document.getElementsByClassName("wrongGuess");



console.log(chosenWord);

function generateUnderScore () {
    for(var i = 0; i < chosenWord.length; i++) {
       underScore.push("_"); 
       //docUnderScore[0].innerHtml = underScore.join(" ");
    }
   return underScore;
}




// document.addEventListener("keypress", (event) => {
//     var keycode = event.keyCode;
//     var keyword = String.fromCharCode(event.keycode);
//     console.log(chosenWord.indexOf(keyword));
//     if(keyword.indexOf(chosenWord) > -1) {
//         console.log(true);
//     }
// });

document.addEventListener("keypress", function (event) {
    // var keycode = event.keycode;
    var keyword = String.fromCharCode(event.keyCode);
    console.log(chosenWord.indexOf(keyword));
    if(chosenWord.indexOf(keyword) > -1) {
        //add to right word array
        rightWord.push(keyword);
        
        underScore[chosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join(" ");
        docRightGuess[0].innerHTML = rightWord;
        
        if 
            (underScore.join("") === chosenWord) {
            alert("You Win");
            }
        }
         else {
    wrongWord.push(keyword);
    docWrongGuess[0].innerHTML = wrongWord;
    }
});

docUnderScore[0].innerHTML = generateUnderScore().join(" ");

