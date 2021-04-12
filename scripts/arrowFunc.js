// class playing around with arrow functions

// map
let evens = [0, 2, 4, 6, 8, 10];
let odds = evens.map((v) => v + 1);
console.log(odds);
let pairs = evens.map((v) => ({ even: v, odd: v + 1 }));
console.log(pairs);

let nums = evens.map((v, i) => v ** i);
console.log(nums);

// filter
let chars = ["a", "b", "c", "d", "e"];
let umlaute = chars.filter((c) => c > "b");
console.log(umlaute);

// forEach
let word = "";
chars.forEach((c) => (word += c));
console.log(word);

console.log(chars.reverse());
