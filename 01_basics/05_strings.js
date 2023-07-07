const name = "Vaibhav"
const repoCount = 50

// console.log(name + repocount + "value");

// (``) => Backtiks
// Stringinterpolation
// ${} => placeholders (used to inject variable) (like fill in the blanks)

console.log(`Hello, My name is ${name} and my repocount is ${repoCount}.`);

// new : this syntext uses objects, strings also uses objects behind the scenes.

const gameName = new String ("vaibhav-sh-com")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newstring = gameName.substring(0, 4)
console.log(newstring);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "    vaibhav    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://vaibhav.com/vaibhav%20sharma"

console.log(url.replace('%20', '-'));

console.log(url.includes('kumar'));

console.log(gameName.split('-'));