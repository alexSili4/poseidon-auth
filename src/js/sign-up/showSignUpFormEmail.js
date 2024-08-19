import constants from '/js/constants';
import refs from './refs';

const showSignUpFormEmail = () => {
  refs.signUpFormPhone.classList.add(constants.displayNoneClassName);
  refs.signUpPhoneStep.classList.add(constants.successClassName);
  refs.signUpEmailStep.classList.add(constants.currentClassName);
  refs.signUpFormEmail.classList.remove(constants.displayNoneClassName);
};

export default showSignUpFormEmail;
