const onAdd = function (x, y) {
  console.log(`${x} + ${y} = ${x + y}`);
};
const onMin = function (x, y) {
  return `${x} + ${y} = ${x + y}`;
};
onAdd(10, 20);
console.log(onMin(10, 20));
console.log('');


// Arrow.
const one = (x, y) => {
  console.log(`${x} + ${y} = ${x + y}`);
};
const two = (x, y) => {
  return `${x} + ${y} = ${x + y}`;
};
one(20, 20);
console.log(two(20, 20));
console.log('');

// Arrow 함수의 { } 내부에 구문이 1개만 존재하는 경우 { }와 return을 생략할 수 있다
// => 뒤가 구문이면 실행, => 뒤가 값이면 return을 붙여 반환해 준다
const three = (x, y) => console.log(`${x} + ${y} = ${x + y}`);
const four = (x, y) => `${x} + ${y} = ${x + y}`;
three(30, 20);
console.log(four(30, 20));
console.log('');

// ** ES2016에 추가. 자승 2 ** 3 => 2의 3승 => 8
// Arrow 함수의 매개변수가 1개만 존재하고 기본값이 없는 경우는 () 생략 가능
const five = x => 2 ** x;
console.log(five(3));
console.log('');

const arr = [10, 11, 100, 101, 1000];

// map. 
// 배열을 순환해서 익명함수의 결과값을 기반으로 새로운 배열 생성 - React에서 배열 요소값 수정에 사용
const mapArr = arr.map(function (item, idx) {
  if (item % 2 === 0) return item * 2;
  else return item;
});
console.log(mapArr);
console.log('');

const mapTwo = arr.map(item => (item % 2 === 0) ? item * 2 : item);
console.log(mapTwo);
console.log(arr);
