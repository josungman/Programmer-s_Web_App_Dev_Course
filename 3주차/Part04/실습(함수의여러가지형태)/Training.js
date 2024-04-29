/*
1. IIFE(즉시 실행 함수)
2. 재귀 함수
3. 중첩 함수
4. 콜백 함수
*/

// 1. IIFE(즉시 실행 함수)
// (function foo () {
//     console.log('foo');
// })()

// 2. 재귀 함수
// function foo (arg) {
//     if(arg === 3) return;

//     console.log(arg);
//     foo(arg + 1);
// }

// foo(1);

// 3. 중첩 함수
// function foo(arg) {
//     function bar() {
//         console.log(arg);
//     }
//     bar();
//  }

//  foo(1);

// 4. **콜백 함수**
// function foo(arg) {
//     arg();
// }

// foo(() => {
//     console.log(1);
// })

function getIdCheck(Temp) {
  console.table([Temp]);
}

getIdCheck([11, 2, 3]);
