import { createAsyncThunk, createEntityAdapter, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import * as todoApi from 'src/services/todoApi';
import { Todo, TodoId } from 'src/services/todoApi';
import { AppState } from 'src/state';

export const todoAdapter = createEntityAdapter<Todo>({});

export const {
  selectById: selectTodoById,
  selectIds: selectTodoIds,
  selectEntities: selectTodoEntities,
  selectAll: selectAllTodos,
  selectTotal: selectTotalTodos,
} = todoAdapter.getSelectors((state: AppState) => state.todo);

export const listTodos = createAsyncThunk<
  Todo[],
  undefined,
  {
    state: AppState;
  }
>('todo/listTodos', async () => {
  const todos = await todoApi.listTodos();
  console.log('test', todos);

  return todos;
});

export const createTodo = createAsyncThunk<
  Todo,
  string,
  {
    state: AppState;
  }
>('todo/createTodo', async content => {
  const todo = await todoApi.createTodo(content);
  console.log('test', todo);

  return todo;
});

export const todoSlice = createSlice({
  name: 'todo',
  initialState: todoAdapter.getInitialState(),
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      todoAdapter.upsertOne(state, {
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
    removeTodo(state, action: PayloadAction<TodoId>) {
      todoAdapter.removeOne(state, action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(listTodos.fulfilled, (state, action) => {
      todoAdapter.upsertMany(state, action.payload);
    });
    builder.addCase(createTodo.fulfilled, (state, action) => {
      todoAdapter.upsertOne(state, action.payload);
    });
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
