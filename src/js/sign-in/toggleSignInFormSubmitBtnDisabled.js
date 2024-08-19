import constants from '/js/constants';
import refs from './refs';

const toggleSignInFormSubmitBtnDisabled = (condition) => {
  if (condition) {
    refs.signInFormSubmitBtn.removeAttribute(constants.disabledAttributeName);
  } else {
    refs.signInFormSubmitBtn.setAttribute(constants.disabledAttributeName, '');
  }
};

export default toggleSignInFormSubmitBtnDisabled;
