var options = {
	"objectNouns": ["Conspiracy", "Secrets", "Ghosts", "Assassins", "Scrolls", "Codex", "Agents"],
	"properNouns": ["Atlantis", "Cairo", "Moscow", "Versailles", "Venice", "Shanghai", "Beijing", "Stonehenge", "Poseidon"],
	"characters" : ["Scarlet", "Rook", "Watchman", "Soldier"],
	"possessions": ["Gambit", "Winter"],
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
];

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
};


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

console.log(generateActionThriller());

console.log('\n\n');