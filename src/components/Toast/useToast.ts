import { useContext } from 'react';
import { ToastContext } from 'src/components/Toast/toastContext';
import { ToastOptions } from 'src/components/Toast/types';

export const useToast = (): ToastOptions => {
  const { toast, addToast, closeToast } = useContext(ToastContext);

  return { toast, addToast, closeToast };
}
