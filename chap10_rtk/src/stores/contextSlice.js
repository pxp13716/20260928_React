import { createAsyncThunk, createSlice, isAnyOf, isRejected } from "@reduxjs/toolkit";
import * as api from '@api/contacts'

const emptyContactList = { pageno: '', pagesize: '', totalcount: '', contacts: [] };
const emptyContact = { no: '', name: '', tel: '', address: '', photo: '' };
const emptyResult = { status: '', message: '' };

// 비동기 Action
export const fetchContactListAction = createAsyncThunk(
  'contact/fetchContactListAction',     // 내부 key. 중복되면 에러
  // 첫번째 매개변수는 사용할 값. data = { pageno = 1, pagesize = 5 }
  // rejectWithValue => Error 객체를 그대로 전달
  async ({ pageno = 1, pagesize = 10 }, { rejectWithValue }) => {
    try {
      const resp = await api.getContactListAction(pageno, pagesize);
      // extraReducers 에서 받아 처리한다
      return resp.data;
    } catch (err) {
      return rejectWithValue(err.message || '연락처를 조회할 수 없습니다')
    }
  }
)
export const fetchContactAction = createAsyncThunk(
  'contact/fetchContactAction',
  async (no, { rejectWithValue }) => {
    try {
      const resp = await api.getContactAction(no);
      return resp.data;
    } catch (err) {
      return rejectWithValue(err.message || '연락처를 조회할 수 없습니다')
    }
  }
)
export const deleteContactAction = createAsyncThunk(
  'contact/deleteContactAction',
  async (no, { rejectWithValue }) => {
    try {
      const resp = await api.deleteContactAction(no);
      return resp.data;
    } catch (err) {
      return rejectWithValue(err.message || '연락처를 조회할 수 없습니다')
    }
  }
)
export const addContactAction = createAsyncThunk(
  'contact/addContactAction',
  async (contact, { rejectWithValue }) => {
    try {
      const resp = await api.addContactAction(contact);
      return resp.data;
    } catch (err) {
      return rejectWithValue(err.message || '연락처를 조회할 수 없습니다')
    }
  }
)

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    loading: false,
    error: null,
    contactList: emptyContactList,
    contact: emptyContact,
    actionResult: emptyResult
  },
  reducers: {
    // action => { name: evt.target.name, value: evt.target.value }
    changeContactAction: (state, action) => {
      state.contact[action.payload.name] = action.payload.value
    }
  },
  // 비동기 Action 처리
  extraReducers: (builder) => {
    // pending => loading중 처리
    // fulfilled => 성공적으로 데어터를 가져왔을때
    // rejected => 에러가 발생했을때
    builder
      // contactList
      .addCase(fetchContactListAction.pending, (state) => {
        // payload => createAsyncThunk 에서 return 된 값
        state.loading = true;
        state.error = null;       // 이전 에러 비우기
        state.contactList = emptyContactList;
        state.contact = emptyContact;
        state.actionResult = emptyResult;
      })
      .addCase(fetchContactListAction.fulfilled, (state, action) => {
        state.loading = false;
        state.contactList = action.payload;
      })
      // .addCase(fetchContactListAction.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.payload;
      // })

      // contact
      .addCase(fetchContactAction.pending, (state) => {
        state.loading = true;
        state.error = null;       // 이전 에러 비우기
        state.contact = emptyContact;
        state.actionResult = emptyResult;
      })
      .addCase(fetchContactAction.fulfilled, (state, action) => {
        state.loading = false;
        state.contact = action.payload;
      })
      // .addCase(fetchContactAction.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.payload;
      // })

      // delete
      .addCase(deleteContactAction.pending, (state) => {
        state.loading = true;
        state.error = null;       // 이전 에러 비우기
        state.contact = emptyContact;
        state.actionResult = emptyResult;
      })

      // .addCase(deleteContactAction.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.actionResult = action.payload;
      // })

      // 모든 reject를 처리한다. addCase보다 먼저 정의되면 에러
      .addMatcher(
        isAnyOf(
          deleteContactAction.fulfilled,
          addContactAction.fulfilled,
        ), (state, action) => {
          state.loading = false;
          state.actionResult = action.payload;
        })


      // 모든 reject를 처리한다. addCase보다 먼저 정의되면 에러
      .addMatcher(isRejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
})
export const { changeContactAction } = contactSlice.actions;
export default contactSlice.reducer;
