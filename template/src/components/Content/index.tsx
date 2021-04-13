import { PartStyleProps } from '@emotion/react';
import React, { FC, ReactElement, ReactNode } from 'react';
import { StyleProp, Text, TextProps, TextStyle, View, ViewProps, ViewStyle } from 'react-native';
import { Icon, IconTypes } from 'src/components/Icon';
import { useThemeable } from 'src/theme';

export type ContentParts = {
  row: ViewStyle;
  center: ViewStyle;
  top: ViewStyle;
  bottom: ViewStyle;
  left: ViewStyle;
  leftText: TextStyle;
  leftIcon: ViewStyle;
  right: ViewStyle;
  rightText: TextStyle;
  rightIcon: ViewStyle;
  text: TextStyle;
  subText: TextStyle;
};

export interface ContentProps extends ViewProps, PartStyleProps<ContentParts> {
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'md' | 'lg';
  text?: string | ReactNode;
  subText?: string | ReactNode;
  leftIcon?: IconTypes;
  leftText?: string | ReactNode;
  rightIcon?: IconTypes;
  rightText?: string | ReactNode;
  renderLeft?: (props: ContentIconOrTextProps) => ReactNode;
  renderCenter?: (props: ContentCenterProps) => ReactNode;
  renderTop?: (props: ContentTopProps) => ReactNode;
  renderBottom?: (props: ContentBottomProps) => ReactNode;
  renderRight?: (props: ContentIconOrTextProps) => ReactNode;
}

export const Content: FC<ContentProps> = ({
  text,
  subText,
  leftIcon,
  leftText,
  rightIcon,
  rightText,
  renderLeft = (props: ContentIconOrTextProps) => <ContentIconOrText {...props} />,
  renderCenter = (props: ContentCenterProps) => <ContentCenter {...props} />,
  renderTop,
  renderBottom,
  renderRight = (props: ContentIconOrTextProps) => <ContentIconOrText {...props} />,
  children,
  ...props
}) => {
  const style = useThemeable('Content', props);

  return (
    <View style={style.row}>
      {renderLeft?.({
        iconName: leftIcon,
        style: style.left,
        text: leftText,
        textStyle: style.leftText,
        iconStyle: style.leftIcon,
      })}
      {renderCenter?.({
        text: text || children,
        subText,
        centerStyle: style.center,
        topStyle: style.top,
        bottomStyle: style.bottom,
        textStyle: style.text,
        subTextStyle: style.subText,
        renderTop,
        renderBottom,
      })}
      {renderRight?.({
        iconName: rightIcon,
        style: style.right,
        text: rightText,
        textStyle: style.rightText,
        iconStyle: style.rightIcon,
      })}
    </View>
  );
};

export interface ContentCenterProps extends Pick<ContentProps, 'text' | 'subText' | 'renderTop' | 'renderBottom'> {
  centerStyle: ViewStyle;
  topStyle: ViewStyle;
  bottomStyle: ViewStyle;
  textStyle: TextStyle;
  subTextStyle: TextStyle;
}

export const ContentCenter: FC<ContentCenterProps> = ({
  text,
  subText,
  centerStyle,
  topStyle,
  textStyle,
  bottomStyle,
  subTextStyle,
  renderTop = (props: ContentTopProps) => <ContentTop {...props} />,
  renderBottom = (props: ContentBottomProps) => <ContentBottom {...props} />,
}) => (
  <View style={centerStyle}>
    {renderTop?.({ text, topStyle, textStyle })}
    {renderBottom?.({ subText, bottomStyle, subTextStyle })}
  </View>
);

export interface ContentTopProps extends Pick<ContentCenterProps, 'text' | 'textStyle' | 'topStyle'> {}

export const ContentTop: FC<ContentTopProps> = ({ text, topStyle, textStyle }) => (
  <View style={topStyle}>
    <TextWrapper style={textStyle}>{text}</TextWrapper>
  </View>
);

export interface ContentBottomProps extends Pick<ContentCenterProps, 'subText' | 'subTextStyle' | 'bottomStyle'> {}

export const ContentBottom: FC<ContentBottomProps> = ({ subText, bottomStyle, subTextStyle }) => (
  <View style={bottomStyle}>
    <TextWrapper style={subTextStyle}>{subText}</TextWrapper>
  </View>
);

export interface ContentIconOrTextProps {
  style: StyleProp<ViewStyle>;
  iconName?: IconTypes;
  text?: string | ReactNode;
  textStyle: StyleProp<TextStyle>;
  iconStyle: StyleProp<ViewStyle>;
}

export const ContentIconOrText: FC<ContentIconOrTextProps> = ({ iconName, style, text, textStyle, iconStyle }) =>
  iconName || text ? (
    <View style={style}>
      {iconName && <Icon style={iconStyle} name={iconName} />}
      {text && <TextWrapper style={textStyle}>{text}</TextWrapper>}
    </View>
  ) : null;

export const TextWrapper: FC<TextProps> = ({ children, ...props }) => {
  if (!children) return null;

  return typeof children === 'string' ? <Text {...props}>{children}</Text> : (children as ReactElement);
};
