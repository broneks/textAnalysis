'use strict';

function TextObj(inputStr) {
    this.original = inputStr;

    (function(inputStr) {
        var words         = inputStr.split(/\W+/),
            lastWordsItem = words[words.length - 1];

        this.textArray = lastWordsItem === '' ? words.slice(0, -1) : words;

        this.sentences = inputStr.length ? inputStr.split(/[.?!]\s*(?=[A-Za-z])/).length : 0; 
    
    }).call(this, inputStr);
}

TextObj.prototype.wordCount = function() { 
    return this.textArray.length;
};

TextObj.prototype.wordMatch = function(word, exactMatch) {
    if (typeof word === 'undefined' || typeof word !== 'string') return false;

    var matches = this.textArray.filter(function(item) {
        if (exactMatch)
            return item === word;
        else
            return item.toLowerCase() === word.toLowerCase(); 
    });

    return matches.length;
};

TextObj.prototype.longestWord = function() {
    if (this.textArray.length === 0) return 0;

    return this.textArray.reduce(function(a, b) {
        return a.length > b.length ? a : b;
    });
};

TextObj.prototype.analyzeIt = function() {
    console.log(
        'Original Text:' +
        '\n\n\t' + this.original + '\n\n' +
        'Words: ' + this.wordCount() + '\n' +
        'Sentences: ' + this.sentences + '\n' +
        'Longest Word: ' + this.longestWord() + '\n'
    );
};
	
var fullMetalJacket = new TextObj('Is that you, John Wayne? Is this me?');
var annaChristie    = new TextObj('Gimme a whiskey, ginger ale on the side. And don\'t be stingy, baby.');


fullMetalJacket.analyzeIt();

console.log('---------------\n');

annaChristie.analyzeIt();
