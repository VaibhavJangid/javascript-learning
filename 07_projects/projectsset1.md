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
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
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