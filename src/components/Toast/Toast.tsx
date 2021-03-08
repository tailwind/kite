import { PartStyleProps } from '@emotion/react';
import React, { FC } from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from 'src/components/Button';
import { Icon } from 'src/components/Icon';
import { useToast } from 'src/components/Toast';
import { Theme, useThemeable } from 'src/theme';

export type ToastParts = {
  toast: ViewStyle;
  text: TextStyle;
  icon: ViewStyle;
  close: ViewStyle;
};

export interface ToastProps extends PartStyleProps<ToastParts> {
  message: string;
  colorScheme?: keyof Theme['overrides']['color'];
};

export const Toast: FC<ToastProps> = ({ message, ...props }) => {
  const { closeToast } = useToast();
  const styles = useThemeable('Toast', props);
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.toast, { top: insets.top }]}>
      <Icon name="circle-check" color="white" size={24} style={styles.icon} />
      <Text style={styles.text}>{message}</Text>
      <Button onPress={closeToast} style={styles.close}>
        <Icon name="close" color="white" size={18} />
      </Button>
    </View>
  );
};
