import constants from '/js/constants';
import refs from './refs';

const onSignInFormToggleShowPassBtnClick = (e) => {
  e.currentTarget.blur();

  const inputType = refs.signInFormInputPass.type;
  const isPasswordType = inputType === constants.inputPassType;

  const updatedInputType = isPasswordType ? constants.inputTextType : constants.inputPassType;
  refs.signInFormInputPass.type = updatedInputType;
  e.currentTarget.classList.toggle('show');
};

export default onSignInFormToggleShowPassBtnClick;
