//**배열 생성 방법**
const arr1 = new Array();
const arr2 = [];
const arr3 = [1,2,3,4,5];
const arr4 = new Array(5);
//fill 함수 입력받은 파라미터의 값으로 모두 채우기
const arr5 = new Array(5).fill(5);

//from이용 v : 배열의 값, k : 배열의 인덱스
const arr6 = Array.from(Array(5), function(v,k){
    return k+1;
})

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4.length);
console.log(arr5);
console.log(arr6);


//join 함수 이용 "," 연결하여 문자열 변환
const arr = [1,2,3,4,5]
console.log(arr.join(", "));

//reverse 함수 배열뒤집기 주의:기존배열도 바뀜
console.log(arr.reverse());

//concat 두배열 합치기
const arr1_1 = [1,2,3];
const arr2_1 = [4,5,6];
console.log(arr1_1.concat(arr2_1));



//요소 추가 삭제

//push(요소추가), pop(요소삭제)
//unshift(맨앞요소추가),shift(맨앞요소삭제)

// 요소 중간에 있는 요소 자르기
//slice(시작인덱스,끝인덱스),(원본 요소는 삭제되지 않음)
//splice(시작인덱스,끝인덱스),(원본 요소 같이 삭제됨)


//요소 순회
//for of 사용


//**객채 생성 방법**
const obj1 = new Object();
const obj2 = {};
const obj3 = {name : "성만조",company : "WJ"};
console.log(obj1);
console.log(obj2);
console.log(obj3);

//객체 요소 추가
obj3['email'] = 'cgu999@naver.com';
obj3.phone = '01050945763';
console.log(obj3);

//객체 요소 삭제 delete 키워드
delete obj3.phone;
console.log(obj3);

//객체 요소 확인
console.log('email' in obj3);
console.log('phone' in obj3);

//객체 순회 for in
for (const key in obj3){
    console.log(key,obj3[key]);
}

