
// DONE

// This is the normal fizzbuzz problem with one change
// the function takes in two numbers, a value start, and a value end
// log all the numbers from start - end
// if the value is a multiple of 5, log 'fizz'
// if its a multiple of 3, log "buzz"
// if its a multiple of both log "fizzbuzz". 
// end is your upper limit and start is your lower limit. 
// if the end number is lower than the start, console.log("Improper Input");


const fizzbuzz = function (start, end) {
	
	let num = [];
	if (start < end) {
		for (let i = start; i <= end; i++) {
			if (i % 15 === 0) {
				num.push("fizzbuzz");
			} else if	(i % 5 === 0) {
				num.push("fizz");
			} else if (i % 3 === 0) {
				num.push("buzz");
			} else {
				num.push(i);
			}
		}
	} else {
		num = "Improper Input";
	}
	return num;
};


console.log(fizzbuzz(45, 155));
console.log(fizzbuzz(99, 220));
console.log(fizzbuzz(80, 25));
// Third one should return "Improper Input";



// [
//   'fizzbuzz', 46,     47,     'buzz',     49,     'fizz',
//   'buzz',     52,     53,     'buzz',     'fizz', 56,
//   'buzz',     58,     59,     'fizzbuzz', 61,     62,
//   'buzz',     64,     'fizz', 'buzz',     67,     68,
//   'buzz',     'fizz', 71,     'buzz',     73,     74,
//   'fizzbuzz', 76,     77,     'buzz',     79,     'fizz',
//   'buzz',     82,     83,     'buzz',     'fizz', 86,
//   'buzz',     88,     89,     'fizzbuzz', 91,     92,
//   'buzz',     94,     'fizz', 'buzz',     97,     98,
//   'buzz',     'fizz', 101,    'buzz',     103,    104,
//   'fizzbuzz', 106,    107,    'buzz',     109,    'fizz',
//   'buzz',     112,    113,    'buzz',     'fizz', 116,
//   'buzz',     118,    119,    'fizzbuzz', 121,    122,
//   'buzz',     124,    'fizz', 'buzz',     127,    128,
//   'buzz',     'fizz', 131,    'buzz',     133,    134,
//   'fizzbuzz', 136,    137,    'buzz',     139,    'fizz',
//   'buzz',     142,    143,    'buzz',
//   ... 11 more items
// ]
// [
//   'buzz',     'fizz', 101,    'buzz',     103,    104,
//   'fizzbuzz', 106,    107,    'buzz',     109,    'fizz',
//   'buzz',     112,    113,    'buzz',     'fizz', 116,
//   'buzz',     118,    119,    'fizzbuzz', 121,    122,
//   'buzz',     124,    'fizz', 'buzz',     127,    128,
//   'buzz',     'fizz', 131,    'buzz',     133,    134,
//   'fizzbuzz', 136,    137,    'buzz',     139,    'fizz',
//   'buzz',     142,    143,    'buzz',     'fizz', 146,
//   'buzz',     148,    149,    'fizzbuzz', 151,    152,
//   'buzz',     154,    'fizz', 'buzz',     157,    158,
//   'buzz',     'fizz', 161,    'buzz',     163,    164,
//   'fizzbuzz', 166,    167,    'buzz',     169,    'fizz',
//   'buzz',     172,    173,    'buzz',     'fizz', 176,
//   'buzz',     178,    179,    'fizzbuzz', 181,    182,
//   'buzz',     184,    'fizz', 'buzz',     187,    188,
//   'buzz',     'fizz', 191,    'buzz',     193,    194,
//   'fizzbuzz', 196,    197,    'buzz',
//   ... 22 more items
// ]
// Improper Input
