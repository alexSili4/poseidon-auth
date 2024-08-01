import constants from './constants';
import refs from './refs';

const toggleConfirmPhoneNumberBtnDisabled = (value) => {
  const isValidPhoneLength = value.length === constants.phoneExample.length;

  if (isValidPhoneLength) {
    refs.confirmPhoneNumberBtn.removeAttribute(constants.disabledAttributeName);
  } else {
    refs.confirmPhoneNumberBtn.setAttribute(constants.disabledAttributeName, '');
  }

  return isValidPhoneLength;
};

export default toggleConfirmPhoneNumberBtnDisabled;
