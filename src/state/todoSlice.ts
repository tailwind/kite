import { createEntityAdapter, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from 'src/state';

export type TodoId = string;

export type Todo = {
  id: TodoId;
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
    toggleTodo(state, action: PayloadAction<TodoId>) {
      todoAdapter.updateOne(state, {
        id: action.payload,
        changes: { completed: !state.entities[action.payload]?.completed },
      });
    },
    deleteTodo(state, action: PayloadAction<TodoId>) {
      todoAdapter.removeOne(state, action.payload);
    },
  },
  extraReducers: () => {},
});

export const { createTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
