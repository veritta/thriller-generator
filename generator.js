function randomlySelect(array) {
	var i = Math.floor(Math.random() * array.length);
	return array[i];
}



function generateActionThriller() {
	var properNouns = ["Atlantis", "Cairo", "Moscow", "Versailles"];
	var objectNouns = ["Conspiracy", "Secrets", "Ghosts", "Assassins"];
	return "The " + randomlySelect(objectNouns) + " of " + randomlySelect(properNouns);
}





/* 
 * -------------------------------
 *             MAIN
 * -------------------------------
 */

console.log('-------------------------------\nTHRILLER GENERATOR\n-------------------------------');

console.log(generateActionThriller());

console.log('\n\n');