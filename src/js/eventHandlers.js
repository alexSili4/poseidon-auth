import onBackspacePress from './onBackspacePress';
import onConfirmPhoneNumberBtnClick from './onConfirmPhoneNumberBtnClick';
import onPhoneInputChange from './onPhoneInputChange';
import onSmsCodeInputChange from './onSmsCodeInputChange';
import refs from './refs';

refs.phoneInput.addEventListener('input', onPhoneInputChange);

refs.smsCodeInputs.forEach((input, index) => {
  input.addEventListener('input', (e) => onSmsCodeInputChange({ e, index }));
  input.addEventListener('keydown', (e) => onBackspacePress({ e, index }));
});

refs.confirmPhoneNumberBtn.addEventListener('click', onConfirmPhoneNumberBtnClick);
