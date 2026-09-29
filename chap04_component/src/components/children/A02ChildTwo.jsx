const A02ChildTwo = (props) => {
  const { name, age, check, user, changeCheck, changeUser } = props;

  return (
    <div className="mb-3">
      <h3>A02ChildTwo</h3>

      <div>
        Name: {name} <br />
        Age: {age} <br />
        Check: {check ? 'T' : 'F'} <br />
        User: {user?.name} / {user?.age} / {user?.address} <br />

        <button onClick={() => changeCheck()}>Check</button>
        <button onClick={() => changeUser('address', '서울')}>User</button>
      </div>
    </div>
  )
}

export default A02ChildTwo