/*
1-1.자바스크립트 함수는 함수의 실제 매개변수가 될 수 있다.
1-2.자바스크립트 함수는 함수의 반환값이 될 수 있다.
1-3.자바스크립트 함수는 할당명령문의 대상이 될 수 있다.
1-4.자바스크립트 함수는 동일비교의 대상이 될 수 있다 
*/


// 1-1.자바스크립트 함수는 함수의 실제 매개변수가 될 수 있다.
// function foo(arg) {
//    arg() 
// }

// function bar() {
//     console.log('bar')
// }

// foo(bar);

// 1-2.자바스크립트 함수는 함수의 반환값이 될 수 있다.
// function foo(arg) {
//     return arg;
// }

// function bar() {
//     console.log('bar');    
// }

// foo(bar)();

// 1-3.자바스크립트 함수는 할당명령문의 대상이 될 수 있다.
// const foo = function (arg) {
//     return console.log(arg);
// }

// foo(1);


/*
2-1. 기본값 매개변수 default function parameter
2-2. 나머지 매개변수 Rest parameter
2-3. arguments 객체 (빌트인)
*/

// 2-1. 기본값 매개변수 default function parameter
// function foo(arg=1) {
//     console.log(arg)
// }
// foo();


// 2-2. 나머지 매개변수 Rest parameter
// function foo(arg, ...rest){
//     console.log(rest);
// }

// foo(1,2,3);


// 2-3. arguments 객체 (빌트인)
// function foo(arg, ...rest){
//     console.log(arguments);
// }

// foo(1,2,3,4)