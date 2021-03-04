export type ToastProps = {
  message: string;
  duration?: number;
};

export type ToastContextProps = {
  toast?: ToastProps;
  displayToast: (options: ToastProps) => void;
  closeToast: () => void;
};
