import React, { FC } from 'react';
import { Button } from 'src/components/Button';
import { Content } from 'src/components/Content';
import { Checkbox } from './Checkbox';

export type TodoProps = {
  content: string;
  completed: boolean;
  onToggle: (currentValue: boolean) => void;
  onDetails?: () => void;
  onDelete?: () => void;
};

export const Todo: FC<TodoProps> = ({ content, completed, onToggle, onDetails, onDelete }) => (
  <Content
    text={content}
    rowStyle={{ borderTopWidth: 1, borderColor: 'gray.500' }}
    renderRight={() => (
      <>
        <Checkbox value={completed} onPress={onToggle} />
        {onDetails && (
          <Button colorScheme="blue" variant="outline" size="xs" onPress={onDetails}>
            details
          </Button>
        )}
        {onDelete && (
          <Button colorScheme="red" variant="outline" size="xs" onPress={onDelete}>
            delete
          </Button>
        )}
      </>
    )}
  />
);
