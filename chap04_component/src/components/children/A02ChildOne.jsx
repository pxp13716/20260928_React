// 컴포넌틔 함수의 첫번째 매개변수가 상위 컴포넌트에서 전달된 값을 담은 객체다
function A02ChildOne(props) {
  // console.log(props);
  // 디스트럭처링
  const {
    type = 'time',
    num = 0,
    checkOne = true,
    checkTwo = true,
    name = 'UNKNOWN',
    age = 1,
    check = true,
    user = {},
    add = () => { },      // 자바스크립트에서는 함수도 객체로 취급된다
    changeName = () => { },
    changeAge = () => { },
  } = props;

  const display = () => {
    const today = new Date();
    switch (type) {
      case 'date':
        return <span style={{ color: 'orange' }}>{today.toLocaleDateString()}</span>;
      case 'time':
        return today.toLocaleTimeString();
      default:
        return today.toLocaleString();
    }
  }

  return (
    <div className="mb-3">
      <h3>A02ChildOne</h3>

      <div>
        Today: {display()} <br />
        Num: {num + 1} <br />
        CheckOne: {checkOne ? 'T' : 'F'} <br />
        CheckTwo: {checkTwo ? 'T' : 'F'} <br />
        Name: {name} <br />
        Age: {age} <br />
        Check: {check ? 'T' : 'F'} <br />
        User: {user?.name} / {user?.age} / {user?.address} <br />
        onAdd: {add(10, 20)} <br />

        <button onClick={() => changeName('아담')}>Name</button>
        <button onClick={() => changeAge(10)}>Age</button>
      </div>
    </div>
  )
}

export default A02ChildOne
