import { createTheme } from '@shopify/restyle';
import {
  buttonSizeTextVariants,
  buttonSizeVariants,
  buttonTextVariants,
  buttonVariants,
} from 'src/components/Button/variants';
import { textVariants } from 'src/components/Text/variants';
import * as foundations from './foundations';

export const theme = createTheme({
  ...foundations,
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants,
  buttonVariants,
  buttonTextVariants,
  buttonSizeVariants,
  buttonSizeTextVariants,
});

export type Theme = typeof theme;
