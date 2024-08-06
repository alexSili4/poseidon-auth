import showSignUpFormEmail from './showSignUpFormEmail';
import localStorage from './localStorage';
import localStorageKeys from './localStorageKeys';
import showSignUpFormProfile from './showSignUpFormProfile';

const onDomContentLoaded = () => {
  const signUpFormPhone = localStorage.load(localStorageKeys.signUpFormPhone);
  const signUpFormEmail = localStorage.load(localStorageKeys.signUpFormEmail);

  if (signUpFormEmail) {
    showSignUpFormProfile();
  } else if (signUpFormPhone) {
    showSignUpFormEmail();
  }
};

export default onDomContentLoaded;
