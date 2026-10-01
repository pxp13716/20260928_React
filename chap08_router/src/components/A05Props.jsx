function A05Props({ name = '이름 없음', age = 0 }) {
  return (
    <div className="mb-3">
      <h3>PROPS</h3>

      <div className="mb-3">
        Name: {name}<br />
        Age: {age + 100}<br />
      </div>
    </div>
  );
}

export default A05Props;