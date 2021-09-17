import { toast } from 'react-toastify';
export function numberValidation(text) {
  if (!Number(text)) {
    toast.error('please enter numbers in the field');
    return '';
  }
  return Number(text);
}
