import constants from '/js/constants';
import refs from './refs';

const toggleShowResendPhoneNumberTimeout = () => {
  refs.phoneInputWrap.classList.toggle(constants.timeoutClassName);
  refs.resendPhoneTimeout.classList.toggle('show');
};

export default toggleShowResendPhoneNumberTimeout;
