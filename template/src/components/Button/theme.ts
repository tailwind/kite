import { Themeable } from '@emotion/react';
import { ButtonParts, ButtonProps } from 'src/components/Button';

export const buttonTheme: Themeable<ButtonProps, ButtonParts> = {
  baseStyle: {
    text: props => ({
      opacity: props.loading ? 0 : 1,
    }),
    button: props => ({
      borderRadius: props.rounded,
      alignItems: 'center',
      justifyContent: 'center',
    }),
  },
  defaultProps: {
    variant: 'solid',
    colorScheme: 'purple',
    size: 'md',
    rounded: 'full',
  },
  props: {
    variant: {
      solid: {
        button: props => ({
          backgroundColor: props.colorScheme,
        }),
        text: {
          color: 'white',
        },
      },
      outline: {
        button: props => ({
          borderWidth: 2,
          borderColor: props.colorScheme,
        }),
        text: props => ({
          color: props.colorScheme,
        }),
      },
      ghost: {
        text: props => ({
          color: props.colorScheme,
        }),
      },
    },
    size: {
      lg: {
        button: {
          paddingVertical: 4,
          paddingHorizontal: 10,
        },
        text: {
          fontSize: 'lg',
        },
      },
      md: {
        button: {
          paddingVertical: 3,
          paddingHorizontal: 8,
        },
        text: {
          fontSize: 'md',
        },
      },
      sm: {
        button: {
          paddingVertical: 2,
          paddingHorizontal: 6,
        },
        text: {
          fontSize: 'sm',
        },
      },
      xs: {
        button: {
          paddingVertical: 1,
          paddingHorizontal: 4,
        },
        text: {
          fontSize: 'xs',
        },
      },
    },
  },
};
