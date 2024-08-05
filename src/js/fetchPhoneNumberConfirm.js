import constants from './constants';
import localStorage from './localStorage';
import localStorageKeys from './localStorageKeys';
import refs from './refs';
import setResendPhoneNumberInterval from './setResendPhoneNumberInterval';
import toggleSmsCodeInputsDisabled from './toggleSmsCodeInputsDisabled';

const fetchPhoneNumberConfirm = async (data) => {
  const url = '/customer/sign-up/send-sms';
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  try {
    // const response = await fetch(url, options);

    // if (!response.ok) {
    //   const error = await response.json();
    //   const errorMessage = error[0].message;

    //   throw new Error(errorMessage);
    // }

    // const { phone } = await response.json();
    const phone = localStorage.load(localStorageKeys.phone);
    //
    toggleSmsCodeInputsDisabled();
    setResendPhoneNumberInterval();
    localStorage.save({ key: localStorageKeys.phone, value: phone });
    refs.phoneInputWrap.classList.remove(constants.invalidClassName);
  } catch (error) {
    refs.phoneError.textContent = error.message;
    refs.phoneInputWrap.classList.add(constants.invalidClassName);
  }
};

export default fetchPhoneNumberConfirm;
