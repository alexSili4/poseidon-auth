import constants from '/js/constants';
import refs from './refs';
import enableBtn from '/js/enableBtn';

const showSignUpFormEmail = () => {
  refs.signUpFormPhone.classList.add(constants.displayNoneClassName);
  refs.signUpPhoneStep.classList.add(constants.successClassName);
  refs.signUpEmailStep.classList.add(constants.currentClassName);
  refs.signUpFormEmail.classList.remove(constants.displayNoneClassName);

  enableBtn(refs.signUpEmailStepBtn);
};

export default showSignUpFormEmail;
