import { useTheme } from '@emotion/react';
import _ from 'lodash';
import { useMemo } from 'react';
import { buttonTheme } from 'src/components/Button/theme';
import { contentTheme } from 'src/components/Content/theme';
import { inputTheme } from 'src/components/Input/theme';
import { screenTheme } from 'src/components/Screen/theme';
import { textTheme } from 'src/components/Text/theme';
import * as foundations from './foundations';

export const theme = {
  overrides: {
    backgroundColor: foundations.colors,
    color: foundations.colors,
    borderColor: foundations.colors,
    borderBottomColor: foundations.colors,
    fontWeight: foundations.fontWeights,
    fontSize: foundations.fontSizes,
    borderRadius: foundations.borderRadii,
  },
  components: {
    Button: buttonTheme,
    Input: inputTheme,
    Content: contentTheme,
    Screen: screenTheme,
    Text: textTheme,
  },
};

export type Theme = typeof theme;

type Flatten<T> = {
  [key in keyof T]: ReturnTypeIfFunc<T[key]>;
};
type ReturnTypeIfFunc<T> = T extends (...args: any) => any ? ReturnType<T> : T;

// TODO: Refactor basically this entire thing....
export const useThemeable = <
  ComponentKey extends keyof Theme['components'],
  ComponentConfig extends Theme['components'][ComponentKey],
  ComponentThemeProps = keyof ComponentConfig['props']
>(
  themeKey: ComponentKey,
  incomingProps: ComponentThemeProps,
): NonNullable<Flatten<Required<ComponentConfig['parts']>>> => {
  const t = useTheme();
  const componentConfig = useMemo(() => _.get(t, ['components', themeKey], {}) as ComponentConfig, [t, themeKey]);
  const parts = useMemo(() => Object.keys(componentConfig.baseStyle), [componentConfig]);
  const props = useMemo(() => ({ ..._.get(componentConfig, ['defaultProps'], {}), ...incomingProps }), [
    componentConfig,
    incomingProps,
  ]);
  const propKeys = useMemo(() => Object.keys(_.get(componentConfig, ['props'], {})), [componentConfig]);
  const style = useMemo(
    () =>
      _.reduce(
        parts,
        (result, part: string) => {
          _.defaultsDeep(result, {
            [part]: _.get(props, [`${part}Style`], {}),
          });

          propKeys.forEach(propKey => {
            const propValue: string | undefined = _.get(
              props,
              [propKey],
              _.get(componentConfig, ['defaultProps', propKey]),
            );

            if (propValue) {
              _.defaultsDeep(result, {
                [part]: executeIfFunc(_.get(componentConfig, ['props', propKey, propValue, part], {}), [props, t]),
              });
            }
          });

          _.defaultsDeep(result, {
            [part]: executeIfFunc(_.get(componentConfig, ['baseStyle', part], {}), [props, t]),
          });

          _.each(result[part], (value, index) => {
            // @ts-ignore
            if (value && t.overrides[index]) {
              // @ts-ignore
              if (t.overrides[index][value] !== undefined) {
                // @ts-ignore
                // eslint-disable-next-line no-param-reassign
                result[part][index] = t.overrides[index][value];
              } else {
                throw new Error(`${themeKey}: ${index} does not support the value ${value}`);
              }
            }
          });

          return result;
        },
        {} as any,
      ),
    [componentConfig, parts, propKeys, props, t, themeKey],
  );

  return style;
};

function executeIfFunc(value: Object | Function, args: any[]) {
  if (typeof value === 'function') {
    return value(...args);
  }

  return value;
}
