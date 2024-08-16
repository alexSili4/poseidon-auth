import constants from './constants';
import refs from './refs';

const toggleSignUpFormProfileSubmitBtnDisabled = (condition) => {
  if (condition) {
    refs.signUpFormProfileSubmitBtn.removeAttribute(constants.disabledAttributeName);
  } else {
    refs.signUpFormProfileSubmitBtn.setAttribute(constants.disabledAttributeName, '');
  }
};

export default toggleSignUpFormProfileSubmitBtnDisabled;
