// const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// const values = coding.forEach ( (item) => {
//     console.log(item);
//     return item
// } )

// console.log(values);

// from above example we can understand that "forEach" does't return it's value.


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => (num > 4) )

// *** num > 4 / (num > 4) / { return num / 4 }

// console.log(newNums);

// from above example we can understand that "filter" can return it's value.

// how "filter" works? => in filter we get a callback function "( (num) => num > 4 )" => where we access the each value => then we give it a condition "(num > 4)" => which ever value is 'true' will be return other will not be return.

// above was the basic of "filter".


// as we know "forEach" can't return value so we apply another "if" statement so that it work properly and in below Example we can how it works.


// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

   let userBooks = books.filter ( (bk) => bk.genre === "Science")

    userBooks = books.filter ( (bk) => { return bk.title === "Book Six" } )

  console.log(userBooks);