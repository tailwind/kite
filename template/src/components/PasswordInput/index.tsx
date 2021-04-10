import React, { FC, useCallback, useState } from 'react';
import { Button } from 'src/components/Button';
import { Input, InputProps } from 'src/components/Input';

export interface PasswordInputProps extends InputProps {}

export const PasswordInput: FC<PasswordInputProps> = ({ ...props }) => {
  const [visible, setVisible] = useState<boolean>(false);

  const onToggle = useCallback(() => {
    setVisible(prev => !prev);
  }, []);

  const renderToggleButton = useCallback(
    () => (
      <Button buttonStyle={{ position: 'absolute', right: 8, alignSelf: 'center' }} size="xs" onPress={onToggle}>
        {visible ? '[x]' : '[  ]'}
      </Button>
    ),
    [onToggle, visible],
  );

  return <Input {...props} secureTextEntry={!visible} renderRight={renderToggleButton} />;
};
