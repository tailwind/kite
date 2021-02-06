import React, { FC, useMemo } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { ButtonThemeProps } from 'src/components/Button/theme';
import { useThemeable } from 'src/theme';

export interface ButtonProps extends ButtonThemeProps, TouchableOpacityProps {}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const style = useThemeable('Button', props);

  const wrappedChildren = useMemo(() => {
    if (typeof children === 'string') {
      return <Text style={style.text}>{children}</Text>;
    }

    return children;
  }, [children, style.text]);

  return (
    <TouchableOpacity style={style.button} {...props}>
      {wrappedChildren}
    </TouchableOpacity>
  );
};
