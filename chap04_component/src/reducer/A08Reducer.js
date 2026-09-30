export const reducerFunc = (state, action) => {
  // console.log(state);
  // console.log(action);
  switch (action.type) {
    case 'A08/CHANGENUMBER':
      let value = Number(action.payload.value);
      if (Number.isNaN(value)) value = 0;
      return { ...state, [action.payload.name]: value };
    case 'A08/CHANGESTRING':
      return { ...state, [action.payload.name]: action.payload.value };
    case 'A08/CHANGETODAY':
      return { ...state, today: new Date().toLocaleString() }
    case 'A08/ADDLIST':
      return { ...state, list: state.list.concat(state.avg) }
    default:
      return state;
  }
  // 리턴값으로 data 상태 변수가 변경됨
}

export const init = {
  num: 0,
  str: 'Adam',
  avg: '',
  list: [],
  today: new Date().toLocaleString(),
}
