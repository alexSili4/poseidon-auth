import checkInput from './checkInput';
import refs from './refs';

const setSignUpFormPhoneData = (data) => {
  const { phone, smsCode } = data;

  refs.phoneInput.value = phone.split('380')[1];
  refs.smsCodeInputs.forEach((input, index) => {
    input.value = smsCode[index];
  });

  checkInput(refs.phoneInputWrap);
};

export default setSignUpFormPhoneData;
