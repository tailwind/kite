/* eslint-disable no-nested-ternary */
import { Themeable } from '@emotion/react';
import { InputParts, InputProps } from 'src/components/Input';

export const inputTheme: Themeable<InputProps, InputParts> = {
  baseStyle: {
    outerContainer: {
      position: 'relative',
      alignSelf: 'stretch',
    },
    label: {},
    innerContainer: props => ({
      flexDirection: 'row',
      borderRadius: props.rounded,
    }),
    left: {},
    right: {},
    input: {
      flex: 1,
    },
  },
  defaultProps: {
    variant: 'filled',
    colorScheme: 'purple',
    size: 'sm',
    rounded: 'md',
  },
  props: {
    variant: {
      outline: {
        innerContainer: props => ({
          borderWidth: 2,
          borderColor: props.isInvalid ? 'red.500' : props.focused ? props.colorScheme : 'gray.400',
        }),
        label: {
          marginBottom: 5,
          marginTop: 10,
          fontWeight: 'bold',
          color: 'gray.700',
        },
      },
      filled: {
        innerContainer: props => ({
          borderWidth: 2,
          borderColor: props.isInvalid ? 'red.500' : props.focused ? props.colorScheme : 'gray.200',
          backgroundColor: props.focused ? 'white' : 'gray.200',
        }),
        label: {
          marginBottom: 5,
          marginTop: 10,
          fontWeight: 'bold',
          color: 'gray.700',
        },
      },
      flushed: {
        innerContainer: props => ({
          paddingHorizontal: 0,
          borderRadius: 'none',
          borderBottomWidth: 2,
          borderBottomColor: props.isInvalid ? 'red.500' : props.focused ? props.colorScheme : 'gray.400',
        }),
        label: {
          marginBottom: 5,
          marginTop: 10,
          fontWeight: 'bold',
          color: 'gray.700',
        },
      },
      landing: {
        outerContainer: {
          marginVertical: 15,
        },
        innerContainer: props => ({
          position: 'relative',
          borderWidth: 2,
          borderColor: props.isInvalid ? 'red.500' : props.focused ? props.colorScheme : 'gray.400',
        }),
        label: {
          position: 'absolute',
          zIndex: 1,
          top: -10,
          backgroundColor: 'white',
          paddingHorizontal: 8,
          fontWeight: 'bold',
          left: 10,
          color: 'gray.700',
        },
      },
    },
    size: {
      lg: {
        input: {
          fontSize: 'lg',
          paddingVertical: 12,
          paddingHorizontal: 14,
        },
      },
      md: {
        input: {
          fontSize: 'md',
          paddingVertical: 10,
          paddingHorizontal: 10,
        },
      },
      sm: {
        input: {
          fontSize: 'sm',
          paddingVertical: 10,
          paddingHorizontal: 10,
        },
      },
      xs: {
        input: {
          fontSize: 'xs',
          paddingVertical: 2,
          paddingHorizontal: 6,
        },
      },
    },
  },
};
