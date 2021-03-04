import React, { FC } from 'react';
import { Toast } from 'src/components/Toast';
import { useToast } from 'src/components/Toast/useToast';

export const ToastRenderer: FC = () => {
  const { toast } = useToast();

  if (toast) {
    return <Toast {...toast} />;
  }

  return null;
};
