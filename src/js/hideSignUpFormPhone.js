import refs from './refs';

const gideSignUpFormPhone = () => {
  refs.signUpFormPhone.classList.add('display-none');
  refs.signUpPhoneStep.classList.add('success');
  refs.signUpEmailStep.classList.add('current');
};

export default gideSignUpFormPhone;
