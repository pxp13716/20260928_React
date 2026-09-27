/*
개별 export 된 요소를 import
1. { } 내부에 선언되는 변수명은 export 한 변수명과 동일한 이름으로 정의해야 한다.
2. HTML에서 type을 module로 정의해야 한다
  type="text/javascript" => type="module"
3. 이미 사용되고 있는 변수명이 있다면 as로 이름 변경 가능. 변경 후에는 변경된 이름만 사용 가능
*/


// 한 이름으로 묶어서 사용


// default import
// 파일의 export 변수명과는 상관없음. import 파일에서 사용되지 않는 임의의 변수명으로 정의해서 사용


// 반드시 default가 먼저 정의되어야 한다.



const dom = `
  <div>
    Name: <br>
    Age: <br>
    Check: <br>
    Array: <br>
    User: <br>
    onAdd: <br>

    <hr>

    Name: <br>
    onTotal: <br>
    onAvg: <br>
    X: , Y: 
  </div>
`;

console.log(dom);
