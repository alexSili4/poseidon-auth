import refs from './refs';

const smsCodeSymbols = [];

refs.smsCodeInputs.forEach((input, index) => {
  input.addEventListener('input', (e) => onSmsCodeInputChange({ e, index }));
  input.addEventListener('keydown', (e) => onBackspacePress({ e, index }));
});

function onSmsCodeInputChange({ e, index }) {
  const { value } = e.currentTarget;
  const lastInputIndex = refs.smsCodeInputs.length - 1;
  const shouldChangeFocusToNextInput = value.length && index < lastInputIndex;

  if (shouldChangeFocusToNextInput) {
    refs.smsCodeInputs[index + 1].focus();
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
