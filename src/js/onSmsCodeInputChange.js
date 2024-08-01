import changeSmsCode from './changeSmsCode';
import checkFullSmsCode from './checkFullSmsCode';
import getFullSmsCode from './getFullSmsCode';
import refs from './refs';

const smsCodeSymbols = {};

function onSmsCodeInputChange({ e, index }) {
  const { value } = e.currentTarget;
  changeSmsCode({ value, smsCodeSymbols, inputIndex: index });

  const { fullSmsCode, isFullSmsCode } = getFullSmsCode({ smsCodeSymbols, targetLength: refs.smsCodeInputs.length });

  if (isFullSmsCode) {
    checkFullSmsCode(fullSmsCode);
  }
}

export default onSmsCodeInputChange;
