import React, { FC } from 'react';
import { Toast, useToast } from 'src/components/Toast';


export const ToastRenderer: FC = () => {
  const { toast } = useToast();

  if (toast) {
    return <Toast {...toast} />;
  }

  return null;
};
