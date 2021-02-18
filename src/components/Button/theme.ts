import { Themeable } from '@emotion/react';
import { ButtonParts, ButtonProps } from 'src/components/Button';

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
    colorScheme: 'blue',
    size: 'md',
    rounded: 'full',
  },
  props: {
    variant: {
      solid: {
        button: (props: ButtonProps) => ({
          backgroundColor: props.colorScheme,
        }),
        text: {
          color: 'white',
        },
      },
      outline: {
        button: (props: ButtonProps) => ({
          borderWidth: 2,
          borderColor: props.colorScheme,
        }),
        text: (props: ButtonProps) => ({
          color: props.colorScheme,
        }),
      },
      ghost: {
        text: (props: ButtonProps) => ({
          color: props.colorScheme,
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
          fontSize: 'lg',
        },
      },
      md: {
        button: {
          paddingVertical: 6,
          paddingHorizontal: 15,
        },
        text: {
          fontSize: 'md',
        },
      },
      sm: {
        button: {
          paddingVertical: 4,
          paddingHorizontal: 10,
        },
        text: {
          fontSize: 'sm',
        },
      },
      xs: {
        button: {
          paddingVertical: 4,
          paddingHorizontal: 8,
        },
        text: {
          fontSize: 'xs',
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
