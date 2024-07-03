import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
      {
        id: 1,
        title: "Hey this is first todo",
        completed: false,
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      const id = nanoid();
      state.todos.push({ id, ...action.payload });
    },
    toggleCompletedTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleCompletedTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
