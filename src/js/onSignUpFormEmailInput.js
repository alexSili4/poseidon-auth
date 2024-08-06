import setFormData from './setFormData';
import constants from './constants';
import toggleSignUpFormEmailSubmitBtnDisabled from './toggleSignUpFormEmailSubmitBtnDisabled';
import validateValue from './validateValue';

const onSignUpFormEmailInput = (e) => {
  const data = {};

  setFormData({ data, form: e.currentTarget });

  const isValidEmail = validateValue({ value: data.email, regExp: constants.emailRegExp });
  const isValidPassLength = data.password.length >= constants.passMinLength;
  const isValidFormData = isValidEmail && isValidPassLength;

  toggleSignUpFormEmailSubmitBtnDisabled(isValidFormData);
};

export default onSignUpFormEmailInput;
