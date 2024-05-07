
//1. 구조 분해 할당을 이용한 변수 swap
let a = 5, b = 10;
[a, b] = [b, a];
console.log(a, b); // 10 5


//2. 배열 생성으로 루프 제거하기

//2-1.보통 단순히 범위 루프를 돌고 싶다면 다음과 같이 코드를 작성합니다.
let sum = 0;
for (let i = 5; i < 10; i += 1) {
    sum += i;
}
console.log(sum);

//2-2.만약 범위 루프를 함수형 프로그래밍 방식으로 사용하고 싶다면 배열을 생성해서 사용할 수 있습니다.
//아래와 같은 방법이 있다는 것만 알아두기
const sum2 = Array
    .from(new Array(5), (_, k) => k + 5)
    .reduce((acc, cur) => acc + cur, 0);
console.log(sum2)


//3. 배열 내 같은 요소 제거하기(set 사용)
const names = ['Lee', 'Kim', 'Park', 'Lee', 'Kim'];
//Array.from 사용
const uniqueNamesWithArrayFrom = Array.from(new Set(names));
/*스프레드 연산자 ...는 이터러블 객체의 요소를 개별적으로 분리해 배열로 만드는 역할을 합니다.
new Set(names)는 중복 없는 Set 객체를 생성하므로, [...new Set(names)]는 이 Set의 요소들을 분리해 배열로 만듭니다. */
const uniqueNamesWithSpread = [...new Set(names)];

console.log(uniqueNamesWithArrayFrom);
console.log(uniqueNamesWithSpread);


//4. Spread 연산자를 이용한 객체 병합
//두 객체를 별도 변수에 합쳐줄 수 있습니다.
const person = {
	name: 'Lee Sun-Hyoup',
	familyName: 'Lee',
	givenName: 'Sun-Hyoup'
};

const company = {
	name: 'Cobalt. Inc.',
	address: 'Seoul'
};

const leeSunHyoup = { ...person, ...company };
console.log(leeSunHyoup);
// {
//   address: “Seoul”
//	   familyName: “Lee”
//   givenName: “Sun-Hyoup”
//   name: "Cobalt. Inc." // 같은 키는 마지막에 대입된 값으로 정해진다.
// }


//5. &&와 || 활용
//&&와 ||는 조건문 외에서도 활용될 수 있습니다.

// 객체 병합에도 이용할 수 있습니다.
const makeCompany = (showAddress) => {
  return {
    name: 'Cobalt. Inc.',
    ...showAddress && { address: 'Seoul' }
  }
};
console.log(makeCompany(false));
// { name: 'Cobalt. Inc.' }
console.log(makeCompany(true));
// { name: 'Cobalt. Inc.', address: 'Seoul' }


//** 6. 구조 분해 할당 사용하기 **
//6-1.객체에서 필요한 것만 꺼내 쓰는 것이 좋습니다.
const person2 = {
	name: 'Lee Sun-Hyoup',
	familyName: 'Lee',
	givenName: 'Sun-Hyoup',
	company: 'Cobalt. Inc.',
	address: 'Seoul',
}
const { familyName, givenName } = person2;
console.log(familyName);

//6-2.객체를 생성할 때 프로퍼티 키를 변수 이름으로 생략할 수 있습니다
const name2 = 'Lee Sun-Hyoup';
const company2 = 'Cobalt';
const person3 = {
  name2,
  company2
}
console.log(person3);
// {
//   name: 'Lee Sun-Hyoup'
//   company: 'Cobalt',
// }

//7. 비구조화 할당 사용하기
//함수에 객체를 넘길 경우 필요한 것만 꺼내 쓸 수 있습니다.
const makeCompany2 = ({ name, address, serviceName }) => {
    return {
      name,
      address,
      //serviceName
    }
  };
  const cobalt = makeCompany2({ name: 'Cobalt. Inc.', address: 'Seoul', serviceName: 'Present' });
  console.log(cobalt);


//8. 동적 속성 이름
//ES6에 추가된 기능으로 객체의 키를 동적으로 생성 할 수 있습니다.
const nameKey = 'name';
const emailKey = 'email';
const person4 = {
  [nameKey]: 'Lee Sun-Hyoup',
  [emailKey]: 'kciter@naver.com'
};
console.log(person4);
// {
//   name: 'Lee Sun-Hyoup',
//   email: 'kciter@naver.com'
// }

//9. !! 연산자를 사용하여 Boolean 값으로 바꾸기
//!! 연산자를 이용하여 0, null, 빈 문자열, undefined, NaN을 false로 그 외에는 true로 변경할 수 있습니다.
function check(variable) {
    if (!!variable) {
      console.log(variable);
    } else {
      console.log('잘못된 값');
    }
  }
  check(null); // 잘못된 값
  check(3.14); // 3.14
  check(undefined); // 잘못된 값
  check(0); // 잘못된 값
  check('Good'); // Good
  check(''); // 잘못된 값
  check(NaN); // 잘못된 값
  check(5); // 5