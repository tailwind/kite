import { Themeable, ThemeableProps } from '@emotion/react';
import { TextStyle, ViewStyle } from 'react-native';

type Props = {
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'md' | 'lg';
};

type Parts = {
  row: ViewStyle;
  center: ViewStyle;
  top: ViewStyle;
  bottom: ViewStyle;
  left: ViewStyle;
  right: ViewStyle;
  text: TextStyle;
  subText: TextStyle;
};

export type ContentThemeProps = ThemeableProps<Props, Parts>;

export const contentTheme: Themeable<Props, Parts> = {
  parts: ['row', 'center', 'top', 'bottom', 'left', 'right', 'text', 'subText'],
  baseStyle: {
    row: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    center: {
      flex: 1,
      flexDirection: 'column',
    },
    top: {},
    bottom: {},
    left: {
      paddingHorizontal: 20,
    },
    right: {
      paddingHorizontal: 20,
    },
    text: {
      fontSize: 18,
      fontWeight: '600',
    },
    subText: {
      fontSize: 10,
      color: 'gray',
    },
  },
  defaultProps: {
    variant: 'solid',
    size: 'md',
  },
  props: {
    size: {
      lg: {
        text: {
          fontSize: 24,
        },
        subText: {
          fontSize: 16,
        },
      },
    },
  },
};
