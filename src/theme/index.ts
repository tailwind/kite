import { useTheme } from '@emotion/react';
import _ from 'lodash';
import { useMemo } from 'react';
import Button from 'src/components/Button/theme';
import * as foundations from './foundations';

export const theme = {
  ...foundations,
  components: {
    Button,
  },
};

export default theme;

export type Theme = typeof theme;

type Flatten<T> = {
  [key in keyof T]: ReturnTypeIfFunc<T[key]>;
};
type ReturnTypeIfFunc<T> = T extends (...args: any) => any ? ReturnType<T> : T;

export const useThemeable = <
  ComponentKey extends keyof Theme['components'],
  ComponentConfig extends Theme['components'][ComponentKey],
  ComponentThemeProps = keyof ComponentConfig['props']
>(
  themeKey: ComponentKey,
  incomingProps: ComponentThemeProps,
): NonNullable<Flatten<ComponentConfig['baseStyle']>> => {
  const t = useTheme();
  const componentConfig = useMemo(() => _.get(t, ['components', themeKey], {}) as ComponentConfig, [t, themeKey]);
  const parts = useMemo(() => _.get(componentConfig, ['parts'], []), [componentConfig]);
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

          return result;
        },
        {} as any,
      ),
    [componentConfig, parts, propKeys, props, t],
  );

  return style;
};

function executeIfFunc(value: Object | Function, args: any[]) {
  if (typeof value === 'function') {
    return value(...args);
  }

  return value;
}
