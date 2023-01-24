import Toast from '../components/Toast';

export const showToast = (text, error = false) => {
  const toast = (error && Toast.getToastError()) || Toast.getToast();
  toast && toast.show(text.toUpperCase(), 1500);
};

const rand = () => {
  return Math.random().toString(36).substr(2);
};

export const token = () => {
  return rand() + rand();
};
