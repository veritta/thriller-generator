function randomlySelect(array) {
	var i = Math.floor(Math.random() * array.length);
	return array[i];
}

function formatXofY(objectNoun, properNoun) {
	return "The " + objectNoun + " of " + properNoun;
}

function formatTheXY(objectNoun, properNoun) {
	return "The " + properNoun + " " + objectNoun;
}

function formatPossessive(objectNoun, properNoun) {
	return properNoun + "'s " + objectNoun;
}

function generateActionThriller() {
	var objectNouns = ["Conspiracy", "Secrets", "Ghosts", "Assassins", "Scrolls", "Codex", "Agents"];
	var properNouns = ["Atlantis", "Cairo", "Moscow", "Versailles", "Venice", "Shanghai", "Beijing", "Stonehenge"];
	var formats = [formatXofY, formatTheXY];
	var chosenFormat = randomlySelect(formats);

	return chosenFormat(randomlySelect(objectNouns), randomlySelect(properNouns));
}





/* 
 * -------------------------------
 *             MAIN
 * -------------------------------
 */

console.log('-------------------------------\nTHRILLER GENERATOR\n-------------------------------');

console.log(generateActionThriller());

console.log('\n\n');