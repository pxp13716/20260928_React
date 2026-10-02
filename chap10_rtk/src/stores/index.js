// npm i -D redux-logger
import { configureStore } from '@reduxjs/toolkit'
import reduxLogger from 'redux-logger'
import countSlice from './countSlice'
import todoSlice from './todoSlice'
import contextSlice from './contextSlice'

// main에 등록
const store = configureStore({
  reducer: {
    // 각 store 파일을 통합
    countStore: countSlice,
    todoStore: todoSlice.reducer,
    contactStore: contextSlice,
  },
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      serializableCheck: {
        warnAfter: 200,
      }
    })
    // const logger = middleware.concat(reduxLogger.default);

    return [...middleware, reduxLogger.default];
  }
})

export default store;