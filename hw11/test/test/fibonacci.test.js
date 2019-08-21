//1
// test ('simple test', () => {
//     console.log('Test is working')
// });


//2
const { assert } = require ('chai');
const { fibonacci } = require ('../src/fibonacci.js');

test ('Test fibonacci. Input 1. Expected [0]', () => {
    //Arrange - set variable
    const input = 1;
    const expectedResult = [0];
    //Act - to do action
    const actualResult = fibonacci(input);
    //Assert - we have to validate - (Important!)
    assert.deepEqual(actualResult, expectedResult);
});

test ('Test fibonacci. Input 2. Expected [0, 1]', () => {
    //Arrange - set variable
    const input = 2;
    const expectedResult = [0, 1];
    //Act - to do action
    const actualResult = fibonacci(input);
    //Assert - we have to validate - (Important!)
    assert.deepEqual(actualResult, expectedResult);
});

test ('Test fibonacci. Input 3. Expected [0, 1, 1]', () => {
    //Arrange - set variable
    const input = 3;
    const expectedResult = [0, 1, 1];
    //Act - to do action
    const actualResult = fibonacci(input);
    //Assert - we have to validate - (Important!)
    assert.deepEqual(actualResult, expectedResult);
});

test ('Test fibonacci. Input 4. Expected [0, 1, 1, 2]', () => {
    //Arrange - set variable
    const input = 4;
    const expectedResult = [0, 1, 1, 2];
    //Act - to do action
    const actualResult = fibonacci(input);
    //Assert - we have to validate - (Important!)
    assert.deepEqual(actualResult, expectedResult);
});

test ('Test fibonacci. Input -1. Expected Error', () => {
    //Arrange - set variable
    const input = -1;
    //Act - to do action
    assert.throws(() => {
        fibonacci(input);
    }, 'It is wrong number');
});
