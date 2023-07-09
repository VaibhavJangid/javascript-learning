// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate); // date is an Object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));                // This date comes in miliseconds to convert it in seconds divide it by 1000, // Math.floot is foor to make it easy to understand

let newDate = new Date()
// console.log(newDate.getMonth());       // 0 => January 11 => December
// console.log(newDate.getDay());

// `${newDate.getFullYear} and the time is ${newDate.getMonth}`

