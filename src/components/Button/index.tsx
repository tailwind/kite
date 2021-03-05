import { PartStyleProps } from '@emotion/react';
import React, { FC, useMemo } from 'react';
import { ActivityIndicator, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import { Theme, useThemeable } from 'src/theme';

export type ButtonParts = {
  button: ViewStyle;
  text: TextStyle;
};

export interface ButtonProps extends TouchableOpacityProps, PartStyleProps<ButtonParts> {
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  colorScheme?: keyof Theme['overrides']['color'];
  rounded?: keyof Theme['overrides']['borderRadius'];
  loading?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const style = useThemeable('Button', props);
  const { loading } = props;

  const wrappedChildren = useMemo(() => {
    if (typeof children === 'string') {
      return <Text style={style.text}>{children}</Text>;
    }

    return children;
  }, [children, style.text]);

  return (
    <TouchableOpacity style={style.button} {...props}>
      {loading && <ActivityIndicator style={{ position: 'absolute' }} color={style.text.color} />}
      {wrappedChildren}
    </TouchableOpacity>
  );
};
