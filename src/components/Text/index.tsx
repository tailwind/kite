import { PartStyleProps } from '@emotion/react';
import React, { FC } from 'react';
import { Text as ReactNativeText, TextProps as ReactNativeTextProps, TextStyle } from 'react-native';
import { Theme, useThemeable } from 'src/theme';

export type TextParts = {
  text: TextStyle;
};

export interface TextProps extends ReactNativeTextProps, PartStyleProps<TextParts> {
  fontSize?: keyof Theme['typography']['fontSizes'];
  fontWeight?: keyof Theme['typography']['fontWeights'];
  color?: keyof Theme['colors'];
}

export const Text: FC<TextProps> = ({ children, ...props }) => {
  const style = useThemeable('Text', props);

  return (
    <ReactNativeText style={style.text} {...props}>
      {children}
    </ReactNativeText>
  );
};
