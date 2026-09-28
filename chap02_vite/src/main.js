// bundle tool 기반에서는 확장자 생략 가능
import { name as nick, age, check, arr, user, add } from './exportOne';
import * as one from './exportOne';
import two, { x, y } from './exportTwo';

// 외부 라이브러리 이용
// jquery 내부의 main.js에 import 될 파일이 지정되어 있음
import { $ } from 'jquery'

// CSS 파일
// bootstrap 내부의 main.js에 기술된 파일 이외의 파일을 import 해서 사용해야 함
import 'bootstrap/dist/css/bootstrap.min.css'


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

// jQuery로 출력
$('#root').html(dom);
