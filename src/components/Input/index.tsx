import { PartStyleProps } from '@emotion/react';
import React, { FC, ReactNode, useCallback, useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Text } from 'src/components/Text';
import { Theme, useThemeable } from 'src/theme';

export type InputParts = {
  outerContainer: ViewStyle;
  label: TextStyle;
  innerContainer: ViewStyle;
  left: ViewStyle;
  right: ViewStyle;
  input: TextStyle;
};

export interface InputProps extends TextInputProps, PartStyleProps<InputParts> {
  label?: string;
  focused?: boolean;
  isInvalid?: boolean;
  variant?: 'outline' | 'filled' | 'flushed' | 'landing';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  colorScheme?: keyof Theme['overrides']['color'];
  rounded?: keyof Theme['overrides']['borderRadius'];
  renderLeft?: (props: { style: ViewStyle; focused: boolean }) => ReactNode;
  renderRight?: (props: { style: ViewStyle; focused: boolean }) => ReactNode;
  forwardedRef?: any;
}

export const Input: FC<InputProps> = ({ children, renderLeft, renderRight, forwardedRef, ...props }) => {
  const { label } = props;
  const [focused, setFocused] = useState<boolean>(false);
  const style = useThemeable('Input', { focused, ...props });

  const onFocus = useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocused(true);
      props.onFocus?.(event);
    },
    [props],
  );

  const onBlur = useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocused(false);
      props.onBlur?.(event);
    },
    [props],
  );

  return (
    <View style={style.outerContainer}>
      {label && <Text style={style.label}>{label}</Text>}
      <View style={style.innerContainer}>
        {renderLeft?.({ style: style.left, focused })}
        <TextInput ref={forwardedRef} style={style.input} {...props} onFocus={onFocus} onBlur={onBlur} />
        {renderRight?.({ style: style.right, focused })}
      </View>
    </View>
  );
};
