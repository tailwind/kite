export type ToastProps = {
  message: string;
  duration?: number;
};

export interface ToastItem extends ToastProps {
  id: number;
}

export type ToastOptions = {
  toast?: ToastProps;
  displayToast: (options: ToastProps) => void;
  closeToast: () => void;
};
