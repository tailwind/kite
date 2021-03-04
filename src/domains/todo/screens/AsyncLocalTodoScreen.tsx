import React, { FC, useCallback, useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import { Button } from 'src/components/Button';
import { Screen } from 'src/components/Screen';
import { Text } from 'src/components/Text';
import { Todo } from 'src/domains/todo/components/Todo';
import { createTodo, listTodos } from 'src/services/todo/api';
import { Todo as TodoType } from 'src/services/todo/types';

export const AsyncLocalTodoScreen: FC = () => {
  const [newTodoContent, setNewTodoContent] = useState<string>('');
  const [todos, setTodos] = useState<TodoType[]>([]);

  const refresh = useCallback(
    () =>
      listTodos()
        .then(result => {
          setTodos(result);
        })
        .catch(error => {
          console.error(error);
        }),
    [setTodos],
  );

  const onCreate = useCallback(
    () =>
      createTodo(newTodoContent)
        .then(() => {
          setNewTodoContent('');
        })
        .then(refresh)
        .catch(error => {
          console.error(error);
        }),
    [newTodoContent, refresh],
  );

  useEffect(() => {
    refresh();
  }, [refresh]);

  return (
    <Screen variant="scrolling">
      <Text variant="header">AsyncLocal</Text>
      {todos.map(todo => (
        <Todo key={todo.id} content={todo.content} completed={todo.completed} onDelete={() => { }} onToggle={() => { }} />
      ))}
      <TextInput style={{ borderWidth: 1, width: '50%' }} value={newTodoContent} onChangeText={setNewTodoContent} />
      <Button onPress={onCreate}>Add Todo</Button>
    </Screen>
  );
};
