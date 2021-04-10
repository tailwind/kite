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
      paddingHorizontal: 20,
    },
    right: {
      paddingHorizontal: 20,
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
