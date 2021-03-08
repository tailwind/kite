import { Themeable } from '@emotion/react';
import { ScreenParts, ScreenProps } from 'src/components/Screen';

export const screenTheme: Themeable<ScreenProps, ScreenParts> = {
  baseStyle: {
    outerContainer: {
      backgroundColor: 'white',
    },
    innerContainer: {},
  },
  defaultProps: {
    variant: 'scrolling',
    padding: 'none',
  },
  props: {
    variant: {
      fixed: {
        outerContainer: {
          flex: 1,
          height: '100%',
        },
        innerContainer: {
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          height: '100%',
          width: '100%',
        },
      },
      centered: {
        outerContainer: {
          flex: 1,
          height: '100%',
        },
        innerContainer: {
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
      scrolling: {
        outerContainer: {
          flex: 1,
          height: '100%',
        },
        innerContainer: {
          justifyContent: 'flex-start',
          alignItems: 'stretch',
        },
      },
    },
    padding: {
      sm: {
        innerContainer: {
          padding: 8,
        },
      },
      lg: {
        innerContainer: {
          padding: 16,
        },
      },
    },
  },
};
