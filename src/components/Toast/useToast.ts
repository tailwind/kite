import { useContext } from 'react';
import { ToastContext } from 'src/components/Toast/toastContext';
import { ToastOptions } from 'src/components/Toast/types';

export const useToast = (): ToastOptions => {
  const { toast, displayToast, closeToast } = useContext(ToastContext);

  return { toast, displayToast, closeToast };
}
