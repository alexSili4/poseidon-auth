import showSignUpFormEmail from './showSignUpFormEmail';
import localStorage from './localStorage';
import localStorageKeys from './localStorageKeys';
import showSignUpFormProfile from './showSignUpFormProfile';
import setSignUpFormPhoneData from './setSignUpFormPhoneData';
import setSignUpFormEmailData from './setSignUpFormEmailData';

const onDomContentLoaded = () => {
  const signUpFormPhone = localStorage.load(localStorageKeys.signUpFormPhone);
  const signUpFormEmail = localStorage.load(localStorageKeys.signUpFormEmail);

  if (signUpFormEmail) {
    showSignUpFormProfile();
    setSignUpFormPhoneData(signUpFormPhone);
    setSignUpFormEmailData(signUpFormEmail);
  } else if (signUpFormPhone) {
    showSignUpFormEmail();
    setSignUpFormPhoneData(signUpFormPhone);
  }
};

export default onDomContentLoaded;
