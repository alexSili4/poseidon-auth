import refs from './refs';

const toggleShowResendPhoneNumberTimeout = () => {
  refs.resendPhoneTimeout.classList.toggle('show');
};

export default toggleShowResendPhoneNumberTimeout;
