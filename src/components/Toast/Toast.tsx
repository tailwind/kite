import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from 'src/components/Button';
import { Icon } from 'src/components/Icon';
import { Text } from 'src/components/Text';
import { ToastProps, useToast } from 'src/components/Toast';
import * as foundations from 'src/theme/foundations';


const styles = StyleSheet.create({
  container: {
    backgroundColor: foundations.colors.purple,
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 65,
    borderRadius: 8,
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 1,
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  close: {
    position: 'absolute',
    top: 5,
    right: 5,
    fontWeight: 'bold',
  },
});

export const Toast: FC<ToastProps> = ({ message }) => {
  const { closeToast } = useToast();
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { top: insets.top }]}>
      <Icon name="circle-check" color="white" size={24} style={{ paddingRight: 12 }} />
      <Text style={styles.text}>{message}</Text>
      <Button onPress={closeToast} style={styles.close}>
        <Icon name="close" color="white" size={18} />
      </Button>
    </View>
  );
};
