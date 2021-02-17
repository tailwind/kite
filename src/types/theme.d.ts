import '@emotion/react';
import { Theme as MyTheme } from 'src/theme/index';

declare module '@emotion/react' {
  export interface Theme extends MyTheme {}

  export type Themeable<Props, Parts> = {
    baseStyle: {
      [Part in keyof Parts]: ThemeOverride<Parts[Part]> | ((props: Props, theme: Theme) => ThemeOverride<Parts[Part]>);
    };
    defaultProps?: {
      [Prop in keyof Props]?: Props[Prop];
    };
    props?: {
      [Prop in keyof Props]?: {
        // @ts-expect-error
        [key in Props[Prop]]?: {
          [Part in keyof Parts]?:
            | ThemeOverride<Parts[Part]>
            | ((props: Props, theme: Theme) => ThemeOverride<Parts[Part]>);
        };
      };
    };
  };

  export type ThemeableProps<Props, Parts> = Props & PartStyleProps<Parts>;

  export type PartStyleProps<Parts> = {
    [Part in keyof Parts as `${Part}Style`]?: ThemeOverride<Parts[Part]>;
  };

  export type ThemeOverride<T = any> = Omit<T, keyof Theme['overrides']> &
    {
      [Override in keyof Theme['overrides']]?: keyof Theme['overrides'][Override];
    };
}
