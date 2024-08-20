import constants from '/js/constants';
import refs from './refs';

const toggleForgotPassFormSubmitBtnDisabled = (condition) => {
  if (condition) {
    refs.forgotPassFormSubmitBtn.removeAttribute(constants.disabledAttributeName);
  } else {
    refs.forgotPassFormSubmitBtn.setAttribute(constants.disabledAttributeName, '');
  }
};

export default toggleForgotPassFormSubmitBtnDisabled;
