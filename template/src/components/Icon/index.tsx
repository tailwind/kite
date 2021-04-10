import React from 'react';
import { Platform, StyleProp, ViewStyle } from 'react-native';
import Image from 'react-native-fast-image';
import { Icon as IconI, IconProps as IconPropsI } from 'react-native-vector-icons/Icon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type IconConfig =
  | ({
    component: typeof IconI;
  } & IconPropsI)
  | {
    component: typeof Image;
    source: Function;
  };

const iconMap: {
  [index: string]: IconConfig;
} = {
  'circle-check': {
    component: MaterialCommunityIcons,
    name: 'check-circle-outline',
  },
  close: {
    component: MaterialIcons,
    name: 'close',
  },
  ...Platform.select({
    ios: {},
    android: {},
  }),
};

export type IconTypes = keyof typeof iconMap;

export interface IconProps {
  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Style overrides for the icon container
   */
  containerStyle?: ViewStyle;

  /**
   * The name of the icon
   */
  name: IconTypes;

  /**
   * Prop for style.fontSize
   */
  size?: number;

  /**
   * Prop for style.color
   */
  color?: string;
}

/**
 * Platform agnostic Icon
 *
 * @param props
 */
export function Icon(props: IconProps): React.ReactElement {
  const { name, ...rest } = props;
  const { component: Component, ...iconConfig } = iconMap[name];
  // @ts-ignore
  return <Component {...iconConfig} {...rest} />;
}
