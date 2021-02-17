import { PartStyleProps } from '@emotion/react';
import React, { FC, useMemo } from 'react';
import { Text, TextStyle, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Theme, useThemeable } from 'src/theme';

export type ButtonParts = {
  button: TouchableOpacityProps['style'];
  text: TextStyle;
};

export interface ButtonProps extends TouchableOpacityProps, PartStyleProps<ButtonParts> {
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  colorScheme?: keyof Theme['colors'];
  rounded?: 'none' | 'sm' | 'full';
}

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
