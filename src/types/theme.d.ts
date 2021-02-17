import '@emotion/react';
import { Theme as MyTheme } from 'src/theme/index';

declare module '@emotion/react' {
  export interface Theme extends MyTheme {}

  export type Themeable<Props, Parts> = {
    // parts: (keyof Parts)[];
    baseStyle: {
      [Part in keyof Parts]: Parts[Part] | ((props: Props, theme: Theme) => Parts[Part]);
    };
    defaultProps?: {
      [Prop in keyof Props]?: Props[Prop];
    };
    props?: {
      [Prop in keyof Props]?: {
        // @ts-expect-error
        [key in Props[Prop]]?: {
          [Part in keyof Parts]?: Parts[Part] | ((props: Props, theme: Theme) => Parts[Part]);
        };
      };
    };
  };

  export type ThemeableProps<Props, Parts> = Props & PartStyleProps<Parts>;

  export type PartStyleProps<Parts> = {
    [Part in keyof Parts as `${Part}Style`]?: Parts[Part];
  };
}
