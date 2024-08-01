import refs from './refs';
import constants from './constants';

const checkSmsCode = (smsCode) => {
  refs.smsCodeInputs.forEach((input) => {
    input.setAttribute(constants.disabledAttributeName, '');
  });

  console.log(smsCode);
};

export default checkSmsCode;
