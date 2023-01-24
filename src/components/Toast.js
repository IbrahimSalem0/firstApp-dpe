class Toast {
  static toast = null;
  static toastError = null;

  static setToast(ref) {
    this.toast = ref;
  }

  static getToast() {
    return this.toast;
  }

  static setToastError(ref) {
    this.toastError = ref;
  }

  static getToastError() {
    return this.toastError;
  }
}

export default Toast;
