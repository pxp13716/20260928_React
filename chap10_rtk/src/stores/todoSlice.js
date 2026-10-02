/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

// 비동기 Action

const todoStore = createSlice({
  name: 'todoList',
  initialState: {
    todoList: [
      { id: 1, text: '첫번째 할일', done: true },
      { id: 2, text: '두번째 할일', done: false },
    ],
    text: '',
    cnt: 3,
  },
  // 동기 action으로 상태 변경
  reducers: {
    // action => id
    updateAction: (state, action) => {
      // state.todoList[action.payload].done = !state.todoList[action.payload].done;
      /*
      const todo = state.todoList.find((todo) => todo.id === action.payload);
      if (todo) todo.done = !todo.done;
      */
      const idx = state.todoList.findIndex((todo) => todo.id === action.payload);
      state.todoList[idx].done = !state.todoList[idx].done;
    },
    deleteAction: (state, action) => {
      const todos = state.todoList.filter((todo) => {
        if (todo.id !== action.payload) return true;
        else return false;
      })
      state.todoList = todos;
    },
    addAction: (state, action) => {
      const todo = { id: state.cnt++, text: action.payload, done: false };
      state.todoList.push(todo);
    },
    changeTextAction: (state, action) => {
      // payload값 검증
      state.text = action.payload;
    },
  },
  // 비동기 action을 받아 상태를 변경
  extraReducers: (builder) => {

  }
})
export const { updateAction, deleteAction, addAction, changeTextAction } = todoStore.actions;
export default todoStore;
