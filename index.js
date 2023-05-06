var btn = document.querySelector("button");
var out = document.getElementById("output");


btn.addEventListener("click", getWord);

function getWord() {


    var theWord = [
        " Phoenix   ",
        " Jett",
        " Yoru",
        " Neon",
        " Reyna",
        " Sage",
        " Cypher",
        " Killjoy",
        " Omen",
        " Viper",
        " Brimstone",
        " Astra",
        " Harbor",
        " Sova",
        " Breach",
        " Skye",
        " Raze",
        " KAY/O",
        " Fade",
        " Chamber",

    ];


    var wordNum = Math.floor(Math.random() * theWord.length);


    output.textContent = theWord[wordNum];
}


