import { Themeable } from '@emotion/react';
import _ from 'lodash';
import { TextProps, TouchableOpacityProps } from 'react-native';
import { Theme } from 'src/theme/index';

type Props = {
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  colorScheme?: keyof Theme['colors'];
  rounded?: 'none' | 'sm' | 'full';
};

type Parts = {
  button: TouchableOpacityProps['style'];
  text: TextProps['style'];
};

export type ButtonThemeProps = Props &
  {
    [Part in keyof Parts as `${Part}Style`]?: Parts[Part];
  };

export const buttonTheme: Themeable<Props, Parts> = {
  parts: ['button', 'text'],
  baseStyle: {
    text: {},
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
    },
  },
  defaultProps: {
    variant: 'solid',
    colorScheme: 'gray',
    size: 'md',
  },
  props: {
    variant: {
      solid: {
        button: (props: Props, theme: Theme) => ({
          backgroundColor: getColor(props, theme),
        }),
        text: {
          color: 'white',
        },
      },
      outline: {
        button: (props: Props, theme: Theme) => ({
          borderWidth: 2,
          borderColor: getColor(props, theme),
        }),
        text: (props: Props, theme: Theme) => ({
          color: getColor(props, theme),
        }),
      },
      ghost: {
        text: (props: Props, theme: Theme) => ({
          color: getColor(props, theme),
        }),
      },
    },
    size: {
      lg: {
        button: {
          paddingVertical: 4,
          paddingHorizontal: 20,
        },
        text: {
          fontSize: 28,
        },
      },
      md: {
        button: {
          paddingVertical: 2,
          paddingHorizontal: 15,
        },
        text: {
          fontSize: 20,
        },
      },
      sm: {
        button: {
          paddingVertical: 2,
          paddingHorizontal: 10,
        },
        text: {
          fontSize: 15,
        },
      },
      xs: {
        button: {
          paddingVertical: 2,
          paddingHorizontal: 8,
        },
        text: {
          fontSize: 12,
        },
      },
    },
    rounded: {
      full: {
        button: {
          borderRadius: 100,
        },
      },
      sm: {
        button: {
          borderRadius: 4,
        },
      },
    },
  },
};

function getColor(props: any, theme: Theme) {
  return _.get(theme, ['colors', `${props.colorScheme}`, 500], _.get(theme, ['colors', `${props.colorScheme}`]));
}