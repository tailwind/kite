import { Themeable, ThemeableProps } from '@emotion/react';
import _ from 'lodash';
import { TextStyle } from 'react-native';
import { Theme } from 'src/theme/index';

type Props = {
  fontSize?: 'xs' | 'sm' | 'md' | 'lg';
  fontWeight?: 'light' | 'regular' | 'bold';
  color?: keyof Theme['colors'];
};

type Parts = {
  text: TextStyle;
};

export type TextThemeProps = ThemeableProps<Props, Parts>;

export const textTheme: Themeable<Props, Parts> = {
  parts: ['text'],
  baseStyle: {
    text: (props: Props, theme: Theme) => ({
      color: getColor(props, theme),
    }),
  },
  defaultProps: {
    fontSize: 'sm',
    fontWeight: 'regular',
    color: 'black',
  },
  props: {
    fontSize: {
      lg: {
        text: {
          fontSize: 28,
        },
      },
      md: {
        text: {
          fontSize: 20,
        },
      },
      sm: {
        text: {
          fontSize: 15,
        },
      },
      xs: {
        text: {
          fontSize: 12,
        },
      },
    },
    fontWeight: {
      light: {
        text: {
          fontWeight: '300',
        },
      },
      regular: {
        text: {
          fontWeight: '400',
        },
      },
      bold: {
        text: {
          fontWeight: '700',
        },
      },
    },
  },
};

function getColor(props: any, theme: Theme) {
  return _.get(theme, ['colors', `${props.color}`, 500], _.get(theme, ['colors', `${props.color}`]));
}
