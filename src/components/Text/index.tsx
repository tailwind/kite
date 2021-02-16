import {
  color,
  ColorProps,
  createRestyleComponent,
  opacity,
  OpacityProps,
  spacing,
  SpacingProps,
  textShadow,
  TextShadowProps,
  VariantProps,
  visible,
  VisibleProps,
} from '@shopify/restyle';
import { Text as ReactNativeText, TextProps as ReactNativeTextProps } from 'react-native';
import { fontWeight, FontWeightProps, Theme } from 'src/theme';
import createVariant from 'src/theme/createVariant';

export type TextProps = ColorProps<Theme> &
  OpacityProps<Theme> &
  VisibleProps<Theme> &
  // TypographyProps<Theme> &
  TextShadowProps<Theme> &
  SpacingProps<Theme> &
  FontWeightProps<Theme> &
  VariantProps<Theme, 'textVariants'>;

export const Text = createRestyleComponent<ReactNativeTextProps & { children?: React.ReactNode } & TextProps, Theme>(
  [
    color,
    opacity,
    visible,
    // typography,
    fontWeight,
    textShadow,
    spacing,
    createVariant({ themeKey: 'textVariants' }, fontWeight),
  ],
  ReactNativeText,
);
