import { createContext } from 'react';
import { ToastContextProps } from 'src/components/Toast/toastTypes';

export const ToastContext = createContext<ToastContextProps>({
   displayToast: () => { },
   closeToast: () => { }
});
