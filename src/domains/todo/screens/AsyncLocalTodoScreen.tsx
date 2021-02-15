import React, { FC, useCallback, useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { Todo } from 'src/domains/todo/components/Todo';
import { createTodo, listTodos, Todo as TodoType } from 'src/services/todoApi';

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>AsyncLocal</Text>
      {todos.map(todo => (
        <Todo key={todo.id} content={todo.content} completed={todo.completed} onDelete={() => {}} onToggle={() => {}} />
      ))}
      <TextInput style={{ borderWidth: 1, width: '50%' }} value={newTodoContent} onChangeText={setNewTodoContent} />
      <Button title="Add Todo" onPress={onCreate} />
    </View>
  );
};
