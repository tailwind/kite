import { Themeable } from '@emotion/react';
import _ from 'lodash';
import { TextStyle } from 'react-native';
import { TextParts, TextProps } from 'src/components/Text';
import { Theme } from 'src/theme/index';

export const textTheme: Themeable<TextProps, TextParts> = {
  baseStyle: {
    text: (props: TextProps, theme: Theme) => ({
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
