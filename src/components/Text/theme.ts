import { Themeable } from '@emotion/react';
import { TextParts, TextProps } from 'src/components/Text';

export const textTheme: Themeable<TextProps, TextParts> = {
  baseStyle: {
    text: (props: TextProps) => ({
      color: props.color,
      fontWeight: props.fontWeight,
      fontSize: props.fontSize,
    }),
  },
  defaultProps: {
    fontSize: 'sm',
    fontWeight: 'normal',
    color: 'black',
  },
};
