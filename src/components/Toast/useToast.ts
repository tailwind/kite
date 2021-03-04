import { useContext } from 'react';
import { ToastContext, ToastOptions } from 'src/components/Toast';


export const useToast = (): ToastOptions => useContext(ToastContext)
