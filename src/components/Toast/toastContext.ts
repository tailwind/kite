import { createContext } from 'react';
import { ToastOptions, ToastProps } from 'src/components/Toast';

export type ToastContextProps = {
  toast?: ToastProps;
  displayToast: (options: ToastOptions) => void;
  closeToast: () => void;
};

export const ToastContext = createContext<ToastContextProps>({
   displayToast: () => { },
   closeToast: () => { }
});
