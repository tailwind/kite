import {
  color,
  ColorProps,
  createRestyleComponent,
  createVariant,
  opacity,
  OpacityProps,
  spacing,
  SpacingProps,
  textShadow,
  TextShadowProps,
  typography,
  TypographyProps,
  VariantProps,
  visible,
  VisibleProps,
} from '@shopify/restyle';
import { Text as ReactNativeText, TextProps as ReactNativeTextProps } from 'react-native';
import { Theme } from 'src/theme';

export type TextProps = ColorProps<Theme> &
  OpacityProps<Theme> &
  VisibleProps<Theme> &
  TypographyProps<Theme> &
  TextShadowProps<Theme> &
  SpacingProps<Theme> &
  VariantProps<Theme, 'textVariants'>;

export const Text = createRestyleComponent<ReactNativeTextProps & { children?: React.ReactNode } & TextProps, Theme>(
  [color, opacity, visible, typography, textShadow, spacing, createVariant({ themeKey: 'textVariants' })],
  ReactNativeText,
);
