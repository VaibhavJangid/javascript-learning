# Projects Related to DOM

## project link
[Project link](https://stackblitz.com/edit/dom-project-chaiaurcode-aaedxu?file=1-colorChanger%2Fchaiaurcode.js)

# Solution Code

## Project 1
``` javascript
const buttons = document.querySelectorAll('.button');
// we are selecting 'button' because from here we will get oor values.

const body = document.querySelector('body');
// we are selecting 'body' because this is where we are going to apply our values which we take from 'button'.

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        break;
    }

    // if (e.target.id === 'grey') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'white') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'blue') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'yellow') {
    //   body.style.backgroundColor = e.target.id;
    // }

  });
});


```

## project 2 solution 

``` javascript

const form = document.querySelector('form');
console.log(form);
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result

    if (bmi < 18.5) {
      results.innerHTML = `<span>Your BMI is ${bmi}. You are underweight.</span>`;
    } else if (bmi) {
    }
  }

  // switch (true) {
  //   case height === '' || height < 0 || isNaN(height):
  //     results.innerHTML = `Please give a valid height ${height}`;
  //     break;

  //   case weight === '' || weight < 0 || isNaN(weight):
  //     results.innerHTML = `Please give a valid weight ${weight}`;
  //     break;

  //   default:
  //     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  //     //show the result
  //     results.innerHTML = `<span>${bmi}</span>`;
  // }
});



```

## Project 3 Solution

``` javascript

const clock = document.querySelector('#clock');
// const clock = document.getElementById('clock')

setInterval((dateFunction) => {
  let time = new Date();
  // console.log(time.toLocaleTimeString())
  clock.innerHTML = time.toLocaleTimeString();
}, 1000);

```

## Project 4 Solution

```` javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

// Now we have to collect all the Numbers which user will enter.

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(); // we applied ".preventDefault()" so that the value user submit in form does't go out to server and we can use the value for out use.

    const guess = parseInt(userInput.value); // here we are converting user guess into integer so that the value we get is strictly a integer.
    // console.log(guess);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more then 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess); // here we are pushing guesses into an array,  so that we can store it.
    if (numGuess === 10) {
      displayMessage(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}.`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right.`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low.`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high.`);
  }
}

function displayGuess(guess) {
  userInput.value = ''; // here we are clearing value
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = ''; // here we are clearing value
  userInput.setAttribute('disabled', ''); // it is a key value pair so we have make an second value empty.
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame">Start New Game</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```

## Project 6 Solution

```` javascript

const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = "#"
  for (let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color
};

let intervalId

const startChangingColor = function(){
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000)
  } // to make code cleaner and efficent
  
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function(){
  clearInterval(intervalId)
  intervalId = null // // to make code cleaner and efficent
}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)

```

