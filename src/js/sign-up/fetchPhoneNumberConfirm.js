import constants from '/js/constants';
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
    const response = await fetch(url, options);

    if (!response.ok) {
      const errors = await response.json();

      throw new Error(JSON.stringify({ errors }));
    }

    const { phone } = await response.json();

    toggleSmsCodeInputsDisabled();
    setResendPhoneNumberInterval();
    localStorage.save({ key: localStorageKeys.phone, value: phone });
    refs.phoneInputWrap.classList.remove(constants.invalidClassName);
  } catch (error) {
    const { errors } = JSON.parse(error.message);

    const phoneErrorMessage = errors.find(({ field }) => field === 'phone')?.message;

    if (phoneErrorMessage) {
      refs.phoneError.textContent = phoneErrorMessage;
      refs.phoneInputWrap.classList.add(constants.invalidClassName);
    }
  }
};

export default fetchPhoneNumberConfirm;
