import React from 'react';
import { StyleProp, Text, ViewStyle } from 'react-native';

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
  name: string;

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

  return <Text>{name}</Text>
}