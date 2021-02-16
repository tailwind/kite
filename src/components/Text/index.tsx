import React, { FC } from 'react';
import { Text as ReactNativeText, TextProps as ReactNativeTextProps } from 'react-native';
import { TextThemeProps } from 'src/components/Text/theme';
import { useThemeable } from 'src/theme';

export interface TextProps extends TextThemeProps, ReactNativeTextProps {}

export const Text: FC<TextProps> = ({ children, ...props }) => {
  const style = useThemeable('Text', props);

  return (
    <ReactNativeText style={style.text} {...props}>
      {children}
    </ReactNativeText>
  );
};
