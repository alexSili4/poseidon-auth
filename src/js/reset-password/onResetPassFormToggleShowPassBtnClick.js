import constants from '/js/constants';
import refs from './refs';

const onResetPassFormToggleShowPassBtnClick = (e) => {
  e.currentTarget.blur();

  const inputType = refs.resetPassFormInputPass.type;
  const isPasswordType = inputType === constants.inputPassType;

  const updatedInputType = isPasswordType ? constants.inputTextType : constants.inputPassType;
  refs.resetPassFormInputPass.type = updatedInputType;
  e.currentTarget.classList.toggle('show');
};

export default onResetPassFormToggleShowPassBtnClick;
