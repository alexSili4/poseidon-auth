import refs from './refs';
import onSignInFormToggleShowPassBtnClick from './onSignInFormToggleShowPassBtnClick';
import onSignInFormInput from './onSignInFormInput';
import onSignInFormSubmit from './onSignInFormSubmit';

refs.signInFormToggleShowPassBtn.addEventListener('click', onSignInFormToggleShowPassBtnClick);

refs.signInForm.addEventListener('input', onSignInFormInput);

refs.signInForm.addEventListener('submit', onSignInFormSubmit);
