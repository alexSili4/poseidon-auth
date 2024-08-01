import refs from './refs';

const checkSmsCode = (smsCode) => {
  refs.smsCodeInputs.forEach((input) => {
    input.setAttribute('disabled', '');
  });

  console.log(smsCode);
};

export default checkSmsCode;
