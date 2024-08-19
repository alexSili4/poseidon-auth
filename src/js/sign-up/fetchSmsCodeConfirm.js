import constants from '/js/constants';
import checkInput from './checkInput';
import refs from './refs';
import toggleDisabledBtn from './toggleDisabledBtn';

const fetchSmsCodeConfirm = async (data) => {
  const url = '/customer/sign-up/check-sms-code';
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
      const error = await response.json();
      const errorMessage = error[0].message;

      throw new Error(errorMessage);
    }

    checkInput(refs.phoneInputWrap);
    checkInput(refs.smsCodeInputWrap);
    toggleDisabledBtn(refs.phoneFormNextBtn);
  } catch (error) {
    refs.smsCodeError.textContent = error.message;
    refs.smsCodeInputWrap.classList.add(constants.invalidClassName);
  }
};

export default fetchSmsCodeConfirm;
