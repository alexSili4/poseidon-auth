import showSignUpFormEmail from './showSignUpFormEmail';
import localStorage from './localStorage';
import localStorageKeys from './localStorageKeys';

const onDomContentLoaded = () => {
  const signUpFormPhone = localStorage.load(localStorageKeys.signUpFormPhone);

  if (signUpFormPhone) {
    showSignUpFormEmail();
  }
};

export default onDomContentLoaded;
