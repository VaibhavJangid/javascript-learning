# Projects Related to DOM

## project link
[Project link](https://stackblitz.com/edit/dom-project-chaiaurcode-aaedxu?file=1-colorChanger%2Fchaiaurcode.js)

# Solution Code

## Project 1
```
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