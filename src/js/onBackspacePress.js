import refs from './refs';

function onBackspacePress({ e, index }) {
  const isBackspace = e.code === 'Backspace';
  const { value } = refs.smsCodeInputs[index];
  const isLastInput = !index;

  if (isBackspace && !value && !isLastInput) {
    refs.smsCodeInputs[index - 1].focus();
  }
}

export default onBackspacePress;
