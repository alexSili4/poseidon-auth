import constants from '/js/constants';
import refs from './refs';
import enableBtn from '/js/enableBtn';

const showSignUpFormProfile = () => {
  refs.signUpFormPhone.classList.add(constants.displayNoneClassName);
  refs.signUpFormEmail.classList.add(constants.displayNoneClassName);
  refs.signUpPhoneStep.classList.add(constants.successClassName);
  refs.signUpEmailStep.classList.add(constants.successClassName);
  refs.signUpEmailStep.classList.add(constants.currentClassName);
  refs.signUpStepProfile.classList.add(constants.currentClassName);
  refs.signUpFormProfile.classList.remove(constants.displayNoneClassName);

  enableBtn(refs.signUpStepProfileBtn);
  enableBtn(refs.signUpEmailStepBtn);
};

export default showSignUpFormProfile;
