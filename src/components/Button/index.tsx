import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  color,
  createVariant,
  spacing,
  SpacingProps,
  typography,
  useRestyle,
  VariantProps,
} from '@shopify/restyle';
import React, { FC, useMemo } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Theme } from 'src/theme';
import { Text } from '../Text';

type ButtonProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  VariantProps<Theme, 'buttonVariants'> &
  VariantProps<Theme, 'buttonSizeVariants', 'size'> &
  TouchableOpacityProps;

export const Button: FC<ButtonProps> = ({ onPress, children, ...rest }) => {
  const { style } = useRestyle([spacing, border, backgroundColor, createVariant({ themeKey: 'buttonVariants' })], rest);
  const { style: textStyle } = useRestyle(
    [color, typography, spacing, createVariant({ themeKey: 'buttonTextVariants' })],
    rest,
  );
  const { style: sizeTextStyle } = useRestyle(
    [createVariant({ property: 'size', themeKey: 'buttonSizeTextVariants' })],
    rest,
  );
  const { style: sizeStyle } = useRestyle([createVariant({ property: 'size', themeKey: 'buttonSizeVariants' })], rest);

  const wrappedChildren = useMemo(() => {
    if (typeof children === 'string') {
      return <Text style={[textStyle, sizeTextStyle]}>{children}</Text>;
    }

    return children;
  }, [children, textStyle, sizeTextStyle]);

  return (
    <TouchableOpacity style={[style, sizeStyle]} {...rest}>
      {wrappedChildren}
    </TouchableOpacity>
  );
};
