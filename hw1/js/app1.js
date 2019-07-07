console.log('===== 1 =====')
/* Определить переменные для всех примитивом джавасткрипта */
let typeString = 'isSomeString';
let typeNumber1= 1;
let typeBoolean1 = true;
let typeNull = null;
let typeUndefined = undefined;
let typeObject = {};
let typeNumbersArray = [0, 1, 2, 3];
let typeStringArray = ['one', 'two', 'three'];
let typeMixedArray = [1, true, 'three'];


console.log('===== 2 =====')
/* Написать функцию принимающую число и возвращающую 
его факториал по всем правилам тайпскрипта */

let factorial = function(num){

  let result = num;

  if(num < 0) {
    return console.log('Enter a number that is greater than or equal to 0')
  } else {
    for (var i = result - 1; i >= 1; i--){
        result *= i;
    };
  };
  return result;
};

console.log(factorial(7));

console.log('===== 3 =====')
/* Написать функцию принимающую число и возвращающую 
массив с числами фибоначи до этого порядкового числа */

function fibonacci(num) {

  let result = [0, 1];

    if (num <= 0) {
        return console.log("It's wrong number");
      } else if (num <= 2) {
        return result.slice(0, num);
      } else {
        for (var i = 2; i < num; i++) {
          result.push(result[result.length - 1] + result[result.length - 2]);
      }
        return result;
    }
};

console.log(fibonacci(7)); 