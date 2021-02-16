import composeRestyleFunctions from 'node_modules/@shopify/restyle/dist/composeRestyleFunctions';
import createRestyleFunction from 'node_modules/@shopify/restyle/dist/createRestyleFunction';
import { all, AllProps } from 'node_modules/@shopify/restyle/dist/restyleFunctions';
import {
  BaseTheme,
  ResponsiveValue,
  RestyleFunction,
  RestyleFunctionContainer,
  SafeVariants,
} from 'node_modules/@shopify/restyle/dist/types';

// Without Custom Prop Name
function createVariant<Theme extends BaseTheme, K extends keyof SafeVariants<Theme> = keyof SafeVariants<Theme>>(
  params: {
    themeKey: K;
    defaults?: AllProps<Theme>;
  },
  extra: any,
): RestyleFunctionContainer<VariantProps<Theme, K>, Theme, 'variant', K>;
function createVariant<
  Theme extends BaseTheme,
  K extends keyof SafeVariants<Theme>,
  P extends keyof any,
  TProps extends VariantProps<Theme, K, P>
>(
  { property = 'variant' as P, themeKey, defaults }: { property?: P; themeKey: K; defaults?: AllProps<Theme> },
  extra: any,
) {
  const allRestyleFunctions = composeRestyleFunctions([extra, ...all]);
  const styleFunction = createRestyleFunction<Theme, TProps, P, K>({
    property,
    themeKey,
  });
  const func: RestyleFunction<TProps, Theme> = (props, { theme, dimensions }) => {
    const expandedProps = styleFunction.func(props, { theme, dimensions })[property];

    const variantDefaults = theme[themeKey] ? (theme[themeKey].defaults as Partial<AllProps<Theme>>) : {};

    if (!expandedProps && !defaults && !variantDefaults) return {};

    console.log(
      allRestyleFunctions.buildStyle(
        { ...defaults, ...variantDefaults, ...expandedProps },
        {
          theme,
          dimensions,
        },
      ),
    );
    return allRestyleFunctions.buildStyle(
      { ...defaults, ...variantDefaults, ...expandedProps },
      {
        theme,
        dimensions,
      },
    );
  };
  return {
    property,
    themeKey,
    variant: true,
    func,
  };
}

export type VariantProps<Theme extends BaseTheme, K extends keyof Theme, Property extends keyof any = 'variant'> = {
  [key in Property]?: ResponsiveValue<keyof Omit<Theme[K], 'defaults'>, Theme>;
};

export default createVariant;
