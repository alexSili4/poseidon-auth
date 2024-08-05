import hideSignUpFormPhone from './hideSignUpFormPhone';
import localStorage from './localStorage';
import localStorageKeys from './localStorageKeys';

const onDomContentLoaded = () => {
  const signUpFormPhone = localStorage.load(localStorageKeys.signUpFormPhone);

  if (signUpFormPhone) {
    hideSignUpFormPhone();
  }
};

export default onDomContentLoaded;
