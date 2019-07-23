const { Observable: { create }, range, interval } = require('rxjs');
const {reduce, bufferCount, bufferTime, merge, take, map} = require('rxjs/operators');
const { random, floor } = Math;

//1. Имплементировать функционал range используя функцию create.

// const publisher = create ((observable) => {

//     let i = 10;
//     let count = i + 15;

// for( i; i < count; i++){
//         observable.next(`${i}`);
//     }
// });
// const subscriber = publisher.subscribe(
//     (val) => {
//         console.log(`This is the first subscriber ${val}`);
//     }
// );


//2. Имплементировать функционал interval используя функцию create.
// const publisher = create ((observable) => {

//     let i = 0;
//     const interval = setInterval(() =>{
//         const a = floor(random()*100);
//         observable.next(`This is next itteration ${a}`);
//         i++;
//         if(i > 5){
//             clearInterval(interval)
//         }
//     }, 1000);
// });

// const subscriber1 = publisher.subscribe(
//     (val) => {
//         console.log(`This is the first subscriber <<${val}>>`);
//     }
// );

//3. Используя только reduce иммплементировать функционал filter.

//     const publisher = range(0, 100)
//     .pipe(reduce((acc, val) =>{
//         if(val % 4 === 0){
//         acc += val;
//         console.log(acc);
//     }
//             return acc;
//     }, 1000));

// const subscriber1 = publisher.subscribe(
//     //обработчик onNext в виде val
//     (val) => {
//         console.log(`This is the first subscriber <<${val}>>`);
//     }
// );

//4. Дан обзервабле interval - 1 tick in 50 msec -> выдавать данные либо 1 раз в 333 сек или же когда накапливается 7 элементов.

const publisher1 = interval(50)
    .pipe(map((val) => {
        return `First ${val}`}))
    .pipe(take(105))
    .pipe(bufferCount(7));;

const publisher2 = interval(50)
    .pipe(map((val) => {
        return `Second ${val}`
    }))
    .pipe(take(105))
    .pipe(bufferTime(333));;

const publisher = publisher1.pipe(merge(publisher2));


const subscriber1 = publisher.subscribe(
    (val) => {
        console.log(`Subscriber <<${val}>>`);
    },
    (err) => {
        console.log(`Error appears <<${err}>>`);
    },
    () => {
        console.log(`FINISHED`);
    }
);
