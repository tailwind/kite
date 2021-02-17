import { Themeable } from '@emotion/react';
import _ from 'lodash';
import { ButtonParts, ButtonProps } from 'src/components/Button';
import { Theme } from 'src/theme/index';

export const buttonTheme: Themeable<ButtonProps, ButtonParts> = {
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
        button: (props: ButtonProps, theme: Theme) => ({
          backgroundColor: getColor(props, theme),
        }),
        text: {
          color: 'white',
        },
      },
      outline: {
        button: (props: ButtonProps, theme: Theme) => ({
          borderWidth: 2,
          borderColor: getColor(props, theme),
        }),
        text: (props: ButtonProps, theme: Theme) => ({
          color: getColor(props, theme),
        }),
      },
      ghost: {
        text: (props: ButtonProps, theme: Theme) => ({
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
  return _.get(theme, `colors.${props.colorScheme}.500`, _.get(theme, `colors.${props.colorScheme}`));
}
