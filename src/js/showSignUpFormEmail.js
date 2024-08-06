import refs from './refs';

const showSignUpFormEmail = () => {
  refs.signUpFormPhone.classList.add('display-none');
  refs.signUpPhoneStep.classList.add('success');
  refs.signUpEmailStep.classList.add('current');
};

export default showSignUpFormEmail;
