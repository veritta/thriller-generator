var options = {
	"objectNouns": ["Conspiracy", "Secrets", "Ghosts", "Assassins", "Scrolls", "Codex", "Agents", "Protocol", "Storm"],
	"properNouns": ["Atlantis", "Cairo", "Moscow", "Versailles", "Venice", "Shanghai", "Beijing", "Romanov", "Tudor"],
	"characters" : ["Rook", "Watchman", "Soldier", "Guard", "Spymaster"],
	"possessions": ["Gambit", "Winter", "Protocol", "Vow", "Oath"],
	"adjectives" : ["Forgotten", "Lost", "Last"]
};

var generate = {
	"objectNoun": function() {
		return randomlySelect(options.objectNouns);
	},
	"properNoun": function() {
		return randomlySelect(options.properNouns);
	},
	"character" : function() {
		return randomlySelect(options.characters);
	},
	"possession": function() {
		return randomlySelect(options.possessions);
	},
	"adjective" : function() {
		return randomlySelect(options.adjectives);
	},
};

var formats = [
	function() {
		return "The " + generate.objectNoun() + " of " + generate.properNoun();
	},
	function() {
		return "The " + generate.properNoun() + " " + generate.objectNoun();
	},
	function() {
		return generate.character() + "'s " + generate.possession();
	},
	function() {
		return "The " + generate.character() + " of " + generate.properNoun();
	},
	function() {
		return "The " + generate.adjective() + " " + generate.possession() + " of " + generate.properNoun();
	},
];


function randomlySelect(array) {
	var i = Math.floor(Math.random() * array.length);
	return array[i];
}

function generateActionThriller() {
	var chosenFormat = randomlySelect(formats);
	var title = chosenFormat();

	return title;
}



/* 
 * -------------------------------
 *             MAIN
 * -------------------------------
 */

console.log('-------------------------------\nACTION THRILLER GENERATOR\n-------------------------------');

for (var i = 0; i < formats.length; i++) {
	var format = formats[i];
	console.log(format());
};

console.log('\n' + generateActionThriller());

console.log('\n\n');