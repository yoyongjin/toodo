import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    // {
    //   id: 1,
    //   whatTodo: "todo1",
    // },
    // {
    //   id: 2,
    //   whatTodo: "todo2",
    // },
  ],
  reducers: {
    addTodo(state, action) {
      const newId = Math.random();
      // payload로 입력한 todoItem 의 whatTodo를 넘겨받는다
      return [...state, { id: newId, whatTodo: action.payload }];
    },
    delTodo(state, action) {
      // payload로 선택한 todoItem의 id를 넘겨받는다
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;
