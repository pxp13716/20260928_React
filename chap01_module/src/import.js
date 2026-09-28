/*
개별 export 된 요소를 import
1. { } 내부에 선언되는 변수명은 export 한 변수명과 동일한 이름으로 정의해야 한다.
2. HTML에서 type을 module로 정의해야 한다
  type="text/javascript" => type="module"
3. 이미 사용되고 있는 변수명이 있다면 as로 이름 변경 가능. 변경 후에는 변경된 이름만 사용 가능
*/
import { name as nick, age, check, arr, user, add } from './exportOne.js';

// 한 이름으로 묶어서 사용
import * as one from './exportOne.js';

// default import
// 파일의 export 변수명과는 상관없음. import 파일에서 사용되지 않는 임의의 변수명으로 정의해서 사용
// import two from './exportTwo.js';
// import { x, y } from './exportTwo.js';
// console.log(one);
// console.log(two)

// 반드시 default가 먼저 정의되어야 한다.
import two, { x, y } from './exportTwo.js';

// 자바스크립트에서 가장 많은 에러
// undefined[0], undefined.name, undefined(10, 20)
// null[0], null.name, null(10, 20)


// 외부 라이브러리 이용
// import { $ } from 'jquery'


const name = 'Adam';
const dom = `
  <div>
    Name: ${name} / ${nick} / ${one.name} <br>
    Age: ${age} / ${one.age} <br>
    Check: ${check} / ${one.check} <br>
    Array: ${arr[0]} / ${arr[1]} / ${arr[2]} <br>
    옵셔널 체이닝 연산자: ${one?.arr?.[0]} / ${one?.arr?.[1]} / ${one?.arr1?.[2]}<br>
    User: ${user.name} / ${user.age} / ${user.address}<br>
    User: ${one.user?.name} / ${one.user?.age} / ${one.user1?.address}<br>
    onAdd: ${add(10, 20)} / ${one.add?.(20, 30)}<br>

    <hr>

    Name: ${two.progName}<br>
    getName: ${two.getName?.()} <br>
    getTotal: ${two.getTotal?.(100, 90)} <br>
    onAvg: ${two.getAvg?.(190, 2)} <br>
    X: ${x}, Y: ${y} 
  </div>
`;

// 콘솔 출력
console.log(dom);

// 브라우저에 출력
document.getElementById('app').innerHTML = dom;
