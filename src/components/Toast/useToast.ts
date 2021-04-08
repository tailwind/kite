import { useContext } from 'react';
import { ToastContext, ToastContextProps } from 'src/components/Toast';

export const useToast = (): ToastContextProps => useContext(ToastContext)
