import { Themeable } from '@emotion/react';
import { ToastParts, ToastProps } from 'src/components/Toast';

export const toastTheme: Themeable<ToastProps, ToastParts> = {
  baseStyle: {
    toast: (props: ToastProps) => ({
      backgroundColor: props.colorScheme,
      paddingVertical: 12,
      paddingLeft: 12,
      paddingRight: 65,
      borderRadius: 'md',
      flex: 1,
      flexDirection: 'row',
      position: 'absolute',
      zIndex: 1,
      width: '95%',
      alignSelf: 'center',
      alignItems: 'center'
    }),
    text: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 'md',
    },
    icon: {
      paddingRight: 12,
    },
    close: {
      position: 'absolute',
      top: 5,
      right: 5,
      fontWeight: 'bold',
    }
  },
  defaultProps: {
    colorScheme: 'purple',
  },
  props: { }
};
