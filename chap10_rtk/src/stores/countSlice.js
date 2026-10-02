/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

const countStore = createSlice({
  name: 'count',      // 내부적으로 구별하기 위해 사용하는 이름. 중복되면 에러
  // 상태변수
  initialState: {
    count: 0,
    storeName: 'Count Store',
  },
  // 동기 처리
  // Action: 외부에서 호출될 메서드. 
  // 이 메서드가 실행되서 상태를 변경 - immer가 내장 (state 값은 복사된 새로운 값)
  reducers: {
    incAction: (state, action) => {
      state.count = state.count + (action.payload ?? 1)
    },
    decAction: (state) => {
      state.count = state.count - 1;
    },
  },
  // 비동기 처리
  extraReducers: (builder) => {

  }
})
// 동기 Action은 별도로 export 처리를 해야 한다
export const { incAction, decAction } = countStore.actions;
export default countStore.reducer;
