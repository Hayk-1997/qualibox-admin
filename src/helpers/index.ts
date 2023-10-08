import { toast } from 'react-toastify';

export const catchApiError = (e: any): string[] => {
  if (e?.response?.data) {
    return !Array.isArray(e?.response?.data.message)
      ? [e?.response?.data.message]
      : e?.response?.data.message;
  }

  return [];
};

export const showMessage = (
  messages: string | string[],
  type: string
): void => {
  if (!Array.isArray(messages)) {
    messages = [messages];
  }
  if (messages?.length) {
    messages.forEach((message) => {
      setTimeout(() => {
        if (type === 'success') {
          toast.success(message);
        } else {
          toast.error(message);
        }
      }, 500);
    });
  } else {
    toast.error('Something went wrong');
  }
};
