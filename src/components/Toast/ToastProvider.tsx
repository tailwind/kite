import { delay } from 'lodash';
import React, { FC, useState } from 'react';
import { LayoutAnimation } from 'react-native';
import { ToastContext, ToastProps } from 'src/components/Toast';

export interface ToastOptions extends ToastProps {
  /** Duration in milliseconds */
  duration?: number;
}

export const ToastProvider: FC = ({ children }) => {
  const [toast, setToast] = useState<ToastOptions>();
  const DEFAULT_DURATION = 5000;

  const displayToast = (options: ToastOptions) => {
    if (!toast) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setToast(options);

      delay(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setToast(undefined);
      }, options.duration || DEFAULT_DURATION);
    }
  };

  const closeToast = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setToast(undefined);
  };

  return (
    <ToastContext.Provider value={{ toast, displayToast, closeToast }}>
      {children}
    </ToastContext.Provider>
  );
};
