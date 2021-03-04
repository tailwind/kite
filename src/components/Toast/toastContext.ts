import { createContext } from 'react';
import { ToastOptions } from 'src/components/Toast';

export const ToastContext = createContext<ToastOptions>({
   displayToast: () => { },
   closeToast: () => { }
});
