import React, { FC, ReactElement, ReactNode } from 'react';
import { StyleProp, Text, TextProps, TouchableOpacityProps, View, ViewStyle } from 'react-native';
import { useThemeable } from 'src/theme';
import { ContentThemeProps } from './theme';

export interface ContentProps extends TouchableOpacityProps, ContentThemeProps {
  text?: string | ReactNode;
  subText?: string | ReactNode;
  leftIcon?: string;
  rightIcon?: string;
  renderLeft?: (props: ContentIconProps) => ReactNode;
  renderCenter?: (props: ContentCenterProps) => ReactNode;
  renderTop?: (props: ContentTopProps) => ReactNode;
  renderBottom?: (props: ContentBottomProps) => ReactNode;
  renderRight?: (props: ContentIconProps) => ReactNode;
}

export const Content: FC<ContentProps> = ({
  text,
  subText,
  leftIcon,
  rightIcon,
  renderLeft = (props: ContentIconProps) => <ContentIcon {...props} />,
  renderCenter = (props: ContentCenterProps) => <ContentCenter {...props} />,
  renderTop,
  renderBottom,
  renderRight = (props: ContentIconProps) => <ContentIcon {...props} />,
  children,
  ...props
}) => {
  const style = useThemeable('Content', props);

  return (
    <View style={style.row}>
      {renderLeft?.({ iconName: leftIcon, style: style.left })}
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
      {renderRight?.({ iconName: rightIcon, style: style.right })}
    </View>
  );
};

export interface ContentCenterProps
  extends Pick<
    ContentProps,
    | 'text'
    | 'subText'
    | 'centerStyle'
    | 'topStyle'
    | 'textStyle'
    | 'bottomStyle'
    | 'subTextStyle'
    | 'renderTop'
    | 'renderBottom'
  > {}

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

export interface ContentIconProps {
  style: StyleProp<ViewStyle>;
  iconName?: string | ReactNode;
}

export const ContentIcon: FC<ContentIconProps> = ({ iconName, style }) =>
  iconName ? (
    <View style={style}>
      <TextWrapper>{iconName}</TextWrapper>
    </View>
  ) : null;

export const TextWrapper: FC<TextProps> = ({ children, ...props }) => {
  if (!children) return null;

  return typeof children === 'string' ? <Text {...props}>{children}</Text> : (children as ReactElement);
};
