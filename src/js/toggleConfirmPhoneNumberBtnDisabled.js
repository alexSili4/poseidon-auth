import constants from './constants';
import refs from './refs';

const toggleConfirmPhoneNumberBtnDisabled = (value) => {
  const isValidPhoneLength = value.length === constants.phoneExample.length;
  const isTimeout = refs.phoneInputWrap.classList.contains(constants.timeoutClassName);

  if (isTimeout) {
    return isValidPhoneLength;
  }

  if (isValidPhoneLength) {
    refs.confirmPhoneNumberBtn.removeAttribute(constants.disabledAttributeName);
  } else {
    refs.confirmPhoneNumberBtn.setAttribute(constants.disabledAttributeName, '');
  }

  return isValidPhoneLength;
};

export default toggleConfirmPhoneNumberBtnDisabled;
