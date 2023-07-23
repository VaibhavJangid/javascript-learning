// *** Array specific loop ***

// for in loop ** mostly used on objects

// appling "for in" loop on objects
 
const myObject = {
    js : 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut for ${myObject[key]}`);
}

// appling "for in" loop on arrays

const programming = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in programming) {
    // console.log(programming[key]);
}

// we can iterate map

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', 'United States of America')
// map.set('Fr', "France")

// for (const key in map) {
//     console.log(key);
// }

