import refs from './refs';
import onSignInFormToggleShowPassBtnClick from './onSignInFormToggleShowPassBtnClick';
import onSignInFormInput from './onSignInFormInput';

refs.signInFormToggleShowPassBtn.addEventListener('click', onSignInFormToggleShowPassBtnClick);

refs.signInForm.addEventListener('input', onSignInFormInput);
