import { Themeable } from '@emotion/react';
import { ViewStyle } from 'react-native';

type Props = {
  variant?: 'fixed' | 'centered' | 'scrolling';
};

type Parts = {
  outerContainer: ViewStyle;
  innerContainer: ViewStyle;
};

export type ScreenThemeProps = Props &
  {
    [Part in keyof Parts as `${Part}Style`]?: Parts[Part];
  };

export const screenTheme: Themeable<Props, Parts> = {
  parts: ['outerContainer', 'innerContainer'],
  baseStyle: {},
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
