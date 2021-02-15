import { createEntityAdapter, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from 'src/state';

type Todo = {
  id: string;
  content: string;
  completed: boolean;
};

export const todoAdapter = createEntityAdapter<Todo>({});

export const {
  selectById: selectTodoById,
  selectIds: selectTodoIds,
  selectEntities: selectTodoEntities,
  selectAll: selectAllTodos,
  selectTotal: selectTotalTodos,
} = todoAdapter.getSelectors((state: AppState) => state.todo);

export const todoSlice = createSlice({
  name: 'todo',
  initialState: todoAdapter.getInitialState(),
  reducers: {
    createTodo(state, action: PayloadAction<string>) {
      todoAdapter.addOne(state, {
        id: nanoid(),
        content: action.payload,
        completed: false,
      });
    },
  },
  extraReducers: () => {},
});

export const { createTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
