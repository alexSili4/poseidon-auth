import localStorage from './localStorage';
import localStorageKeys from './localStorageKeys';

const clearSignUpFormLocalStorage = () => {
  localStorage.remove(localStorageKeys.signUpFormEmail);
  localStorage.remove(localStorageKeys.signUpFormPhone);
  localStorage.remove(localStorageKeys.signUpFormProfile);
  localStorage.remove(localStorageKeys.phone);
};

export default clearSignUpFormLocalStorage;
