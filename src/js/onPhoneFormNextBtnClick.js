import localStorage from './localStorage';
import localStorageKeys from './localStorageKeys';
import refs from './refs';

const onPhoneFormNextBtnClick = (e) => {
  e.currentTarget.blur();

  const phone = localStorage.load(localStorageKeys.phone);
  let smsCode = '';

  refs.smsCodeInputs.forEach((input) => {
    const { value } = input;
    smsCode += value;
  });

  const data = { phone, smsCode };
  localStorage.save({ key: localStorageKeys.signUpFormPhone, value: data });
  refs.signUpFormPhone.classList.add('display-none');
};

export default onPhoneFormNextBtnClick;
