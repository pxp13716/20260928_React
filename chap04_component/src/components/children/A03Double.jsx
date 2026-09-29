function A03Double(props) {
  const { children, DoubleOne, DoubleTwo } = props;

  return (
    <div>
      <h4>A03Double</h4>

      <div>
        <DoubleOne />
      </div>

      <hr />

      <div>
        <DoubleTwo />
      </div>

      <hr />

      <div>
        {children}
      </div>
    </div>
  )
}

export default A03Double