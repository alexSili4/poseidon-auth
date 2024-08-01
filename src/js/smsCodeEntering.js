import changeSmsCode from './changeSmsCode';
import checkFullSmsCode from './checkFullSmsCode';
import getFullSmsCode from './getFullSmsCode';
import refs from './refs';

const smsCodeSymbols = {};

refs.smsCodeInputs.forEach((input, index) => {
  input.addEventListener('input', (e) => onSmsCodeInputChange({ e, index }));
  input.addEventListener('keydown', (e) => onBackspacePress({ e, index }));
});

function onSmsCodeInputChange({ e, index }) {
  const { value } = e.currentTarget;
  changeSmsCode({ value, smsCodeSymbols, inputIndex: index });

  const { fullSmsCode, isFullSmsCode } = getFullSmsCode({ smsCodeSymbols, targetLength: refs.smsCodeInputs.length });

  if (isFullSmsCode) {
    checkFullSmsCode(fullSmsCode);
  }
}

function onBackspacePress({ e, index }) {
  const isBackspace = e.code === 'Backspace';
  const { value } = refs.smsCodeInputs[index];
  const isLastInput = !index;

  if (isBackspace && !value && !isLastInput) {
    refs.smsCodeInputs[index - 1].focus();
  }
}
