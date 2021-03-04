import React, { FC, useState } from 'react';
import { LayoutAnimation } from 'react-native';
import { ToastContext } from 'src/components/Toast/toastContext';
import { ToastProps } from 'src/components/Toast/toastTypes';

export const ToastProvider: FC = ({ children }) => {
  const [toast, setToast] = useState<ToastProps>();
  const DEFAULT_DURATION = 5000;

  const displayToast = (options: ToastProps) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setToast(options);

    setTimeout(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setToast(undefined);
    }, options.duration || DEFAULT_DURATION);
  };

  const closeToast = () => {
    setToast(undefined);
  };

  return (
    <ToastContext.Provider value={{ toast, displayToast, closeToast }}>
      { children}
    </ToastContext.Provider>
  );
};
