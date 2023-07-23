const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10 } )

// myNumers.forEach( (num, index) => {
//     myNumers[index] = num +10
// })


// chaining: applying multiple methods at a time.
// in chaining we have to remember that the value changes every time we apply any operation on it that we see in below example.

const newNums = myNumers
    .map( (num) => num * 10)
    .map( (num) => num + 1)
    .filter( (num) => num >= 40 )

console.log(newNums);