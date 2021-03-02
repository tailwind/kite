import { Themeable } from '@emotion/react';
import { ScreenParts, ScreenProps } from 'src/components/Screen';

export const screenTheme: Themeable<ScreenProps, ScreenParts> = {
  baseStyle: {
    outerContainer: {},
    innerContainer: {},
  },
  defaultProps: {
    variant: 'scrolling',
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
  },
};
