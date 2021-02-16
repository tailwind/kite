import { createRestyleFunction, createTheme, ResponsiveValue } from '@shopify/restyle';
import * as foundations from './foundations';

export const theme = createTheme({
  ...foundations,
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 34,
      color: 'black',
    },
    subheader: {
      fontWeight: '600',
      fontSize: 28,
      color: 'black',
    },
    body: {
      fontSize: 14,
      color: 'purple',
      fontWeight: 'hairline',
    },
  },
});

export type Theme = typeof theme;

export const fontWeight = createRestyleFunction({
  property: 'fontWeight',
  themeKey: 'fontWeights',
});

export interface FontWeightProps<T extends Theme> {
  fontWeight?: ResponsiveValue<keyof T['fontWeights'], T>;
}
