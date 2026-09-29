function A03Button({ id, clzName, title, handler }) {
  // const { id, clzName, title} = props;
  return <button id={id} className={clzName} onClick={() => handler('방자')}>{title}</button>
}

export default A03Button
