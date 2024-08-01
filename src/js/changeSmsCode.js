import refs from './refs';

const changeSmsCode = ({ value, inputIndex, smsCodeSymbols }) => {
  const lastInputIndex = refs.smsCodeInputs.length - 1;
  const shouldChangeFocusToNextInput = value.length && inputIndex < lastInputIndex;

  if (shouldChangeFocusToNextInput) {
    refs.smsCodeInputs[inputIndex + 1].focus();
  }

  smsCodeSymbols[inputIndex] = value;
};

export default changeSmsCode;
