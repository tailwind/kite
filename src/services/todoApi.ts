import { nanoid } from '@reduxjs/toolkit';

export type TodoId = string;

export type Todo = {
  id: TodoId;
  content: string;
  completed: boolean;
};

const todos: Todo[] = [
  {
    id: nanoid(),
    content: 'Test Todo',
    completed: false,
  },
];

export async function listTodos(): Promise<Todo[]> {
  return todos;
}

export async function createTodo(content: string): Promise<Todo> {
  if (content === 'delay') {
    await new Promise(r => setTimeout(r, 2000));
  } else if (content === 'serverError') {
    return Promise.reject();
  } else if (content === 'serverFail') {
    return Promise.reject();
  }

  const newTodo: Todo = {
    id: nanoid(),
    content,
    completed: false,
  };
  todos.push(newTodo);

  return newTodo;
}
