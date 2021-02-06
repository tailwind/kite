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

const buttonMultiComponentStyleConfig: Themeable<Props, Parts> = {
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
          backgroundColor: _.get(
            theme,
            ['colors', `${props.colorScheme}`, 500],
            _.get(theme, ['colors', `${props.colorScheme}`]),
          ),
        }),
        text: {
          color: 'white',
          fontSize: 24,
        },
      },
      outline: {
        button: (props: Props, theme: Theme) => ({
          borderWidth: 2,
          borderColor: _.get(
            theme,
            ['colors', `${props.colorScheme}`, 500],
            _.get(theme, ['colors', `${props.colorScheme}`]),
          ),
        }),
        text: (props: Props, theme: Theme) => ({
          color: _.get(
            theme,
            ['colors', `${props.colorScheme}`, 500],
            _.get(theme, ['colors', `${props.colorScheme}`]),
          ),
        }),
      },
      ghost: {
        text: (props: Props, theme: Theme) => ({
          color: _.get(
            theme,
            ['colors', `${props.colorScheme}`, 500],
            _.get(theme, ['colors', `${props.colorScheme}`]),
          ),
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
          fontSize: 22,
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

export default buttonMultiComponentStyleConfig;
