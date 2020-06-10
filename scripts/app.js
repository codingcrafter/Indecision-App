'use strict';

// function square(x) {
//     return x * x;
// };

// console.log(square(3));

// ES5 Syntax
// const squareArrow = (x) => {
//     return x * x;
// };

//ES6 Syntax
// const squareArrow = (x) => x * x;

// console.log(squareArrow(2));

var getFirstName = function getFirstName(fullName) {
  return fullName.split(' ')[0];
};

console.log(getFirstName('Evan Drews'));
