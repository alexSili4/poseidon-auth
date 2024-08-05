import localStorage from './localStorage';
import localStorageKeys from './localStorageKeys';
import refs from './refs';

const onDomContentLoaded = () => {
  const signUpFormPhone = localStorage.load(localStorageKeys.signUpFormPhone);

  if (signUpFormPhone) {
    refs.signUpFormPhone.classList.add('display-none');
    refs.signUpPhoneStep.classList.add('success');
    refs.signUpEmailStep.classList.add('current');
  }
};

export default onDomContentLoaded;
