// for loop

// this is the basic structure of for loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// for (variable declare; condition check; increasing index)

// *** Process of for loop ***
// variable/index: intialise => then "condition check" => if condition is true => now it goes in block scope {} => then just before completion of block scope it will go towards iteration => then it goes towards "condition check" => .
// this above cycle continues till conditons is fullfield

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);

// }

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);

// }

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);

}

// *** we can use same element which we used in previous "for loop" block scope in other next block scope, because a block scope is completely different from each other. ***

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value is ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`innter loop value ${j} and outer loop value is ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
    }
    
}

let myArray = ["flash", "batman", "superman"]

// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// break and continue

for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`value  of i is ${index}`);;
    
}


//  continue: it skip the condition for one time, and it will remain in loop.

for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`value  of i is ${index}`);;
    
}