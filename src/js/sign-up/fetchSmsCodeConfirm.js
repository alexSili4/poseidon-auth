import constants from '/js/constants';
import checkInput from './checkInput';
import refs from './refs';
import enableBtn from '/js/enableBtn';

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
      const errors = await response.json();

      throw new Error(JSON.stringify({ errors }));
    }

    checkInput(refs.phoneInputWrap);
    checkInput(refs.smsCodeInputWrap);
    enableBtn(refs.phoneFormNextBtn);
  } catch (error) {
    const { errors } = JSON.parse(error.message);

    const smsCodeErrorMessage = errors.find(({ field }) => field === 'sms_code')?.message;

    if (smsCodeErrorMessage) {
      refs.smsCodeError.textContent = smsCodeErrorMessage;
      refs.smsCodeInputWrap.classList.add(constants.invalidClassName);
    }
  }
};

export default fetchSmsCodeConfirm;
