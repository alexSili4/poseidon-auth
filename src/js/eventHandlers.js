import onBackspacePress from './onBackspacePress';
import onConfirmPhoneNumberBtnClick from './onConfirmPhoneNumberBtnClick';
import onPhoneInputChange from './onPhoneInputChange';
import onSmsCodeInputChange from './onSmsCodeInputChange';
import onPhoneFormNextBtnClick from './onPhoneFormNextBtnClick';
import refs from './refs';
import onDomContentLoaded from './onDomContentLoaded';

document.addEventListener('DOMContentLoaded', onDomContentLoaded);

refs.phoneInput.addEventListener('input', onPhoneInputChange);

refs.smsCodeInputs.forEach((input, index) => {
  input.addEventListener('input', (e) => onSmsCodeInputChange({ e, index }));
  input.addEventListener('keydown', (e) => onBackspacePress({ e, index }));
});

refs.confirmPhoneNumberBtn.addEventListener('click', onConfirmPhoneNumberBtnClick);

refs.phoneFormNextBtn.addEventListener('click', onPhoneFormNextBtnClick);
