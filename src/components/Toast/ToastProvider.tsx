import { delay } from 'lodash';
import React, { FC, useState } from 'react';
import { LayoutAnimation } from 'react-native';
import { ToastContext } from 'src/components/Toast/toastContext';
import { ToastProps } from 'src/components/Toast/types';

export const ToastProvider: FC = ({ children }) => {
  const [toast, setToast] = useState<ToastProps>();
  const DEFAULT_DURATION = 5000;

  const displayToast = (options: ToastProps) => {
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
