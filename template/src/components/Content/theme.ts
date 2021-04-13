import { Themeable } from '@emotion/react';
import { ContentParts, ContentProps } from 'src/components/Content';

export const contentTheme: Themeable<ContentProps, ContentParts> = {
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
      paddingRight: 4,
      flexDirection: 'row',
      alignItems: 'center',
    },
    leftText: {
      color: 'gray.600',
    },
    leftIcon: {
      fontSize: 'lg',
    },
    right: {
      paddingLeft: 4,
      flexDirection: 'row',
      alignItems: 'center',
    },
    rightText: {
      color: 'gray.600',
    },
    rightIcon: {
      fontSize: 'lg',
    },
    text: {
      fontSize: 'sm',
      fontWeight: 'bold',
    },
    subText: {
      fontSize: 'xs',
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
          fontSize: 'md',
        },
        subText: {
          fontSize: 'sm',
        },
      },
    },
  },
};
