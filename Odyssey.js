var fs = require("fs");

var wordsList = [];
// var wordsList2 = [];

function Odyssey(word, def) {
    this.word = word,
    this.def = def
}

function createConst (word, def) {
    let newWord = new Odyssey(word, def);
    wordsList.push(newWord);
}

// function createConst2 (word, def) {
//     let newWord = new Odyssey(word, def);
//     wordsList2.push(newWord);
// }

// var myFunction = fs.readFile("words.txt", "utf8", function (err, data) {
    // if (err) throw err;

    //split txt file into an array
    // let words = data.split(",");

    //run through array and create constructor words
//     for (var i = 0; i < words.length; i += 2) {
//         createConst(words[i].trim(), words[i+1].trim());
//     }
    
// // });

// console.log("MY FUNCTION: ", myFunction);
// module.exports = myFunction;


createConst("charybdis", "Greek mythology - a ship-devouring whirlpool lying on the other side of a narrow strait from Scylla");
createConst("muse", "in ancient Greek mythology any of 9 daughters of Zeus and Mnemosyne; protector of an art or science");
createConst("nereid", "(Greek mythology) any of the 50 sea nymphs who were daughters of the sea god Nereus");
createConst("scylla", "(Greek mythology) a sea nymph transformed into a sea monster who lived on one side of a narrow strait; drowned and devoured sailors who tried to escape Charybdis (a whirlpool) on the other side of the strait");
createConst("abase", "cause to feel shame");
createConst("abhorrence", "hate coupled with disgust");
createConst("ambrosia", "the food and drink of the gods");
createConst("ample", "more than enough in size or scope or capacity");
createConst("amulet", "a trinket thought to be a magical protection against evil");
createConst("arbor", "a framework that supports climbing plants");
createConst("asphodel", "any of various chiefly Mediterranean plants of the genera Asphodeline and Asphodelus having linear leaves and racemes of white or pink or yellow flowers");

// console.log("\n-------------------------------\n")
// console.log("FROM TEXT FILE OUTSIDE FS READ", wordsList[0]);
// module.exports = wordsList2;

module.exports = wordsList;
