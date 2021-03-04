import { createContext } from 'react';
import { ToastOptions } from 'src/components/Toast/types';

export const ToastContext = createContext<ToastOptions>({
   addToast: () => { },
   closeToast: () => { }
});
