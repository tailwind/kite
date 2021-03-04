import React, { FC, useContext } from 'react';
import { Toast } from 'src/components/Toast';
import { ToastContext } from 'src/components/Toast/toastContext';

export const ToastRenderer: FC = () => {
  const { toast } = useContext(ToastContext);

  if (toast) {
    return <Toast {...toast} />;
  }

  return null;
};
