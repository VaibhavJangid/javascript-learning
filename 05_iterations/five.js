// forEach loop

const coding = ['js', 'ruby', 'java', 'python', 'cpp']

coding.forEach( function (val) {
    // console.log(val);
} )

// array name => give ".for each" => ".for each" is asking for call back function => name the function => because this function is callback (we don't need to store it) so remove the name of function => this function is running in 'array' so function will gets it value self like parameter(value) ** we can name is anything ** 'in these ()' => then ask for your function to perform in local block or scope "{}".


// using arrow function "=>"
// it also work as above function
coding.forEach ( (item) => {
    // console.log(item);
} )


// by declaring the function first

function printMe(item){
    // console.log(item);
}
coding.forEach(printMe)

coding.forEach( (item, index, array) => {
    // console.log(item, index, array);
} )

// item : value name
// index: value postion(number)
// array: complete list


// **** MOST COMMON ITERATION ****
// [{}, {}, {}] this scenario is very common in "forEach" loop
// Example

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (key) => {
    console.log(`Language is "${(key.languageName)}".`);
} )