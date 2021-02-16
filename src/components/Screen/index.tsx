import React, { FC } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StatusBar, StatusBarStyle, View, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScreenThemeProps } from 'src/components/Screen/theme';
import { useThemeable } from 'src/theme';

const IS_IOS = Platform.OS === 'ios';

export interface ScreenProps extends ScreenThemeProps, ViewProps {
  statusBar?: StatusBarStyle;
  unsafe?: boolean;
}

export const Screen: FC<ScreenProps> = props => {
  const { variant } = props;

  if (variant === 'centered' || variant === 'fixed') {
    return <ScreenWithoutScrolling {...props} />;
  }

  return <ScreenWithScrolling {...props} />;
};

const ScreenWithoutScrolling: FC<ScreenProps> = ({ statusBar = 'default', unsafe = false, children, ...props }) => {
  const insets = useSafeAreaInsets();
  const style = useThemeable('Screen', props);
  const insetStyle = { paddingTop: unsafe ? 0 : insets.top };

  return (
    <KeyboardAvoidingView style={style.outerContainer} behavior={IS_IOS ? 'padding' : undefined}>
      <StatusBar barStyle={statusBar} />
      <View style={[style.innerContainer, insetStyle]}>{children}</View>
    </KeyboardAvoidingView>
  );
};

const ScreenWithScrolling: FC<ScreenProps> = ({ statusBar = 'default', unsafe = false, children, ...props }) => {
  const insets = useSafeAreaInsets();
  const style = useThemeable('Screen', props);
  const insetStyle = { paddingTop: unsafe ? 0 : insets.top };

  return (
    <KeyboardAvoidingView style={style.outerContainer} behavior={IS_IOS ? 'padding' : undefined}>
      <StatusBar barStyle={statusBar} />
      <View style={[style.outerContainer, insetStyle]}>
        <ScrollView style={style.outerContainer} contentContainerStyle={style.innerContainer}>
          {children}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
