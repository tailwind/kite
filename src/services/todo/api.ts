import { nanoid } from '@reduxjs/toolkit';
import { Todo } from './types';

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
  if (content === 'Delay') {
    await new Promise(r => setTimeout(r, 2000));
  } else if (content === 'ServerError') {
    throw new Error('Server Error');
  } else if (content === 'ServerFail') {
    throw new Error('Server Failure');
  }

  const newTodo: Todo = {
    id: nanoid(),
    content,
    completed: false,
  };
  todos.push(newTodo);

  return newTodo;
}
