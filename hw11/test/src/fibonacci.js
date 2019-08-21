function fibonacci(num) {

    let result = [0, 1];

      if (num <= 0) {

          throw new RangeError('It is wrong number');

        } else if (num <= 2) {
          return result.slice(0, num);
        } else {
          for (var i = 2; i < num; i++) {
            result.push(result[result.length - 1] + result[result.length - 2]);
        }
          return result;
      }
  };

//   console.log(fibonacci(7));
module.exports = {
    fibonacci
}
