
// DONE

// write a function that joins the array items together into one string, and log it to the console
let brokenSentence = ['I', 'am', 'a', 'broken', 'sentence'];


const joinSentence = function (arr) {
	let str = arr.join(' ');
	return str;
};

console.log(joinSentence(brokenSentence));

// output = "I am a broken string"


// why it turns one sentence when i put "arr.join()" into str?
// it doesn't change when i dont use verial str and return only arr.