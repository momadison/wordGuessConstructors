function Odyssey(word, def) {
    this.word = word,
    this.def = def
}

var wordsList = []
var charybdis = new Odyssey("charybdis", "Greek mythology - a ship-devouring whirlpool lying on the other side of a narrow strait from Scylla");
var muse = new Odyssey("muse", "in ancient Greek mythology any of 9 daughters of Zeus and Mnemosyne; protector of an art or science");
var nereid = new Odyssey("nereid", "(Greek mythology) any of the 50 sea nymphs who were daughters of the sea god Nereus");
var scylla = new Odyssey("scylla", "(Greek mythology) a sea nymph transformed into a sea monster who lived on one side of a narrow strait; drowned and devoured sailors who tried to escape Charybdis (a whirlpool) on the other side of the strait");
var abase = new Odyssey("abase", "cause to feel shame");
var abhorrence = new Odyssey("abhorrence", "hate coupled with disgust");
var ambrosia = new Odyssey("ambrosia", "the food and drink of the gods");
var ample = new Odyssey("ample", "more than enough in size or scope or capacity");
var amulet = new Odyssey("amulet", "a trinket thought to be a magical protection against evil");
var arbor = new Odyssey("arbor", "a framework that supports climbing plants");
var asphodel = new Odyssey("asphodel", "any of various chiefly Mediterranean plants of the genera Asphodeline and Asphodelus having linear leaves and racemes of white or pink or yellow flowers");
wordsList.push(charybdis, muse, nereid, scylla, abase, abhorrence, ambrosia, ample, amulet, arbor, asphodel);

module.exports = wordsList;