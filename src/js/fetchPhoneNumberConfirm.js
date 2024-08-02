import constants from './constants';
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
    // const data = await response.json();
    // console.log(data);
    // toggleSmsCodeInputsDisabled();
    setResendPhoneNumberInterval();
  } catch (error) {
    console.log(error);
    refs.phoneError.textContent = 'some error';
    refs.phoneInputWrap.classList.add(constants.invalidClassName);
  }
};

export default fetchPhoneNumberConfirm;
