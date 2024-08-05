import constants from './constants';
import refs from './refs';

const onSignUpFormToggleShowPassBtnClick = (e) => {
  e.currentTarget.blur();

  const inputType = refs.signUpFormInputPass.type;
  const isPasswordType = inputType === constants.inputPassType;

  const updatedInputType = isPasswordType ? constants.inputTextType : constants.inputPassType;
  refs.signUpFormInputPass.type = updatedInputType;
  e.currentTarget.classList.toggle('show');
};

export default onSignUpFormToggleShowPassBtnClick;
