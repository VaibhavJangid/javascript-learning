// *** Array specific loop ***

// ["", "", ""] => strings in array "array of strings"
// [{}, {}, {}] => objects in array "array of objects"

// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
//    console.log(`Each char is ${greet}`); 
}


// Maps : maps are for unique values and it follow the given or same order

const map = new Map()
map.set('IN', "India")
map.set('USA', 'United States of America')
map.set('Fr', "France")
// map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// Object is not iterable

const myObject = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

// for (const [key, values] of myObject) {
//     console.log(key, ':-', value);
// }