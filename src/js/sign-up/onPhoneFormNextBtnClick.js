import showSignUpFormEmail from './showSignUpFormEmail';
import localStorage from './localStorage';
import localStorageKeys from './localStorageKeys';
import refs from './refs';
import toggleSmsCodeInputsDisabled from './toggleSmsCodeInputsDisabled';

const onPhoneFormNextBtnClick = () => {
  const phone = localStorage.load(localStorageKeys.phone);
  let smsCode = '';

  refs.smsCodeInputs.forEach((input) => {
    const { value } = input;
    smsCode += value;
  });

  const data = { phone, smsCode };
  localStorage.save({ key: localStorageKeys.signUpFormPhone, value: data });

  showSignUpFormEmail();
  toggleSmsCodeInputsDisabled();
};

export default onPhoneFormNextBtnClick;
