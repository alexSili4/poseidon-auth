import constants from './constants';
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
    const data = await response.json();
    console.log(data);
    toggleDisabledBtn(refs.phoneFormNextBtn);
  } catch (error) {
    console.log(error);
    refs.smsCodeError.textContent = 'some error';
    refs.smsCodeInputWrap.classList.add(constants.invalidClassName);
  }
};

export default fetchSmsCodeConfirm;
