import constants from '/js/constants';
import refs from './refs';

const toggleResetPassFormSubmitBtnDisabled = (condition) => {
  if (condition) {
    refs.resetPassFormSubmitBtn.removeAttribute(constants.disabledAttributeName);
  } else {
    refs.resetPassFormSubmitBtn.setAttribute(constants.disabledAttributeName, '');
  }
};

export default toggleResetPassFormSubmitBtnDisabled;
