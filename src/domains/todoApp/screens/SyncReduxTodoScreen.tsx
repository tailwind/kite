import React, { FC, useCallback, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Todo } from 'src/domains/todoApp/components/Todo';
import { AppDispatch } from 'src/state';
import { createTodo, deleteTodo, selectAllTodos, toggleTodo } from 'src/state/todoSlice';

export const SyncReduxTodoScreen: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector(selectAllTodos);
  const [newTodoContent, setNewTodoContent] = useState<string>('');

  const onCreate = useCallback(() => {
    dispatch(createTodo(newTodoContent));
    setNewTodoContent('');
  }, [dispatch, newTodoContent]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SyncRedux</Text>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          content={todo.content}
          completed={todo.completed}
          onDelete={() => dispatch(deleteTodo(todo.id))}
          onToggle={() => dispatch(toggleTodo(todo.id))}
        />
      ))}
      <TextInput style={{ borderWidth: 1, width: '50%' }} value={newTodoContent} onChangeText={setNewTodoContent} />
      <Button title="Add Todo" onPress={onCreate} />
    </View>
  );
};
