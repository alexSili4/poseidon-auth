import refs from './refs';

const clearSmsCodeInput = () => {
  refs.smsCodeInputs.forEach((input) => {
    input.value = '';
  });
};

export default clearSmsCodeInput;
