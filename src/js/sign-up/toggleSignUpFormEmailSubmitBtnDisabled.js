import constants from '/js/constants';
import refs from './refs';

const toggleSignUpFormEmailSubmitBtnDisabled = (condition) => {
  if (condition) {
    refs.signUpFormEmailSubmitBtn.removeAttribute(constants.disabledAttributeName);
  } else {
    refs.signUpFormEmailSubmitBtn.setAttribute(constants.disabledAttributeName, '');
  }
};

export default toggleSignUpFormEmailSubmitBtnDisabled;
