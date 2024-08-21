import onResetPassFormInput from './onResetPassFormInput';
import onResetPassFormSubmit from './onResetPassFormSubmit';
import onResetPassFormToggleShowPassBtnClick from './onResetPassFormToggleShowPassBtnClick';
import refs from './refs';

refs.resetPassForm.addEventListener('input', onResetPassFormInput);

refs.resetPassForm.addEventListener('submit', onResetPassFormSubmit);

refs.resetPassFormToggleShowPassBtn.addEventListener('click', onResetPassFormToggleShowPassBtnClick);
