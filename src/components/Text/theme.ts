import { Themeable, ThemeableProps } from '@emotion/react';
import _ from 'lodash';
import { TextStyle } from 'react-native';
import { Theme } from 'src/theme/index';

type Props = {
  fontSize?: keyof Theme['typography']['fontSizes'];
  fontWeight?: keyof Theme['typography']['fontWeights'];
  color?: keyof Theme['colors'];
};

type Parts = {
  text: TextStyle;
};

export type TextThemeProps = ThemeableProps<Props, Parts>;

export const textTheme: Themeable<Props, Parts> = {
  parts: ['text'],
  baseStyle: {
    text: (props: Props, theme: Theme) => ({
      color: getColor(props, theme),
      fontSize: _.get(theme, ['typography', 'fontSizes', props.fontSize!]),
      fontWeight: _.get(theme, ['typography', 'fontWeights', props.fontWeight!]) as TextStyle['fontWeight'],
    }),
  },
  defaultProps: {
    fontSize: 'sm',
    fontWeight: 'normal',
    color: 'black',
  },
};

function getColor(props: any, theme: Theme) {
  return _.get(theme, `colors.${props.color}.500`, _.get(theme, `colors.${props.color}`));
}
