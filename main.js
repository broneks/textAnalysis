obj = {
	original:  null,
	textArray: null,
	sentences: null,

	init: function(input) {
		var words = input.split(/\W+/);

		this.original = input;

		// disregard last array item if it's an empty string
		this.textArray = (words[words.length - 1] === '' ? words.slice(0, -1) : words);

		// count each end punctuation followed by a space and letter if input is not an empty string
		this.sentences = (input === '' ? 0 : input.split(/[.?!]\s*(?=[A-Za-z])/).length);
	},

	wordCount: function() {
		return this.textArray.length;
	},

	wordMatch: function(word, exactMatch) {
		// default exactMatch to false if it's undefined
		var exactMatch = (typeof exactMatch === 'undefined' ? false : exactMatch);

		return this.textArray.filter(function(item) {
			if (exactMatch) {
				return item === word;
			} else {
				return item.toLowerCase() === word.toLowerCase();
			}
		}).length;
	},

	longestWord: function() {
		if (this.textArray.length === 0) return 0;

		return this.textArray.reduce(function(a, b) {
			return a.length > b.length ? a : b;
		});
	},

	analyzeIt: function() {
		return 'Original Text:' +
			'\n\n\t' + this.original + '\n\n' +
			'Words: ' + this.wordCount() + '\n' +
			'Sentences: ' + this.sentences + '\n' +
			'Longest Word: ' + this.longestWord();
	}
};

(function() {
	obj.init('Is that you, John Wayne? Is this me?');

	console.log(obj.analyzeIt());
	console.log('Word Match: ' + obj.wordMatch('Is', true));
})();
