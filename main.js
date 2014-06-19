var input = 'Is that you, John Wayne? Is this me?';

obj = {
	text: null,

	init: function() {
		var split = input.split(/\W+/);

		// disregard last array item if it's an empty string
		this.text = (split[split.length - 1] === '' ? split.slice(0, -1) : split);
	},

	wordCount: function() {
		return this.text.length;
	},

	wordMatch: function(word, exactMatch) {
		// default exactMatch to false if it's undefined
		var exactMatch = (typeof exactMatch === 'undefined' ? false : exactMatch);

		return this.text.filter(function(item) {
			if (exactMatch) {
				return item === word;
			} else {
				return item.toLowerCase() === word.toLowerCase();
			}
		}).length;
	}
};

(function() {
	obj.init(input);

	console.log(obj.text);
	console.log(obj.wordCount());
	console.log(obj.wordMatch('Is'));
})();