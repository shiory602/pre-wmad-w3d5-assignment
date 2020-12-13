
// DONE

// write a function that splits the string into an array with an item for each word.
// console log this array
let sentence = "I am a sentence"

const splitSentence= function (str) {
	let array = str.split(" ");
	return array;
};

console.log(splitSentence(sentence));

// expected output = ["I", "am", "a", "sentence"]