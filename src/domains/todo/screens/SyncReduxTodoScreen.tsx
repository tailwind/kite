import React, { FC, useCallback, useState } from 'react';
import { TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'src/components/Button';
import { Screen } from 'src/components/Screen';
import { Text } from 'src/components/Text';
import { Todo } from 'src/domains/todo/components/Todo';
import { AppDispatch } from 'src/state';
import { addTodo, removeTodo, selectAllTodos, toggleTodo } from 'src/state/todoSlice';

export const SyncReduxTodoScreen: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector(selectAllTodos);
  const [newTodoContent, setNewTodoContent] = useState<string>('');

  const onCreate = useCallback(() => {
    dispatch(addTodo(newTodoContent));
    setNewTodoContent('');
  }, [dispatch, newTodoContent]);

  return (
    <Screen variant="scrolling">
      <Text variant="header">SyncRedux</Text>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          content={todo.content}
          completed={todo.completed}
          onDelete={() => dispatch(removeTodo(todo.id))}
          onToggle={() => dispatch(toggleTodo(todo.id))}
        />
      ))}
      <TextInput style={{ borderWidth: 1, width: '50%' }} value={newTodoContent} onChangeText={setNewTodoContent} />
      <Button buttonStyle={{ marginTop: 20 }} onPress={onCreate}>
        Add Todo
      </Button>
    </Screen>
  );
};
