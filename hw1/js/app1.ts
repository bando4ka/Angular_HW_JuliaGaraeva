
/* Определить переменные для всех примитивом джавасткрипта */
console.log('===== 1 =====')
let typeString: string = 'isSomeString';
let typeNumber1: number = 1;
let typeBoolean1: boolean = true;
let typeNull: null = null;
let typeUndefined: undefined = undefined;
let typeObject: object = {};
let typeNumbersArray: Array <number> = [0, 1, 2, 3];
let typeStringArray: Array <string> = ['one', 'two', 'three'];
let typeMixedArray: [number, boolean, string] = [1, true, 'three'];


console.log('===== 2 =====')
/* Написать функцию принимающую число и возвращающую 
его факториал по всем правилам тайпскрипта*/

let factorial = function(num: number): any{

  let result = num;

  if(num < 0) {
    return console.log('The number has to be a positive number or equal to 0')
  } else {
    for (let i: number = result - 1; i >= 1; i--){
        result *= i;
    };
  };
  return result;
};

console.log(factorial(7));

console.log('===== 3 =====')
/* Написать функцию принимающую число и возвращающую 
массив с числами фибоначи до этого порядкового числа*/

function fibonacci(num: number): any{

  let result: number[] = [0, 1];

    if (num <= 0) {
        return console.log("It's wrong number");
      } else if (num <= 2) {
        return result.slice(0, num);
      } else {
        for (let i: number = 2; i < num; i++) {
          result.push(result[result.length - 1] + result[result.length - 2]);
      }
        return result;
    }
};

console.log(fibonacci(7)); 