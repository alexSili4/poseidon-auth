import validateValue from '/js/validateValue';
import constants from '/js/constants';
import setFormData from '/js/setFormData';
import toggleSignInFormSubmitBtnDisabled from './toggleSignInFormSubmitBtnDisabled';

const onSignInFormInput = (e) => {
  const data = {};

  setFormData({ data, form: e.currentTarget });

  const isValidEmail = validateValue({ value: data.email, regExp: constants.emailRegExp });
  const isValidPassLength = data.password.length >= constants.passMinLength;
  const isValidFormData = isValidEmail && isValidPassLength;

  toggleSignInFormSubmitBtnDisabled(isValidFormData);
};

export default onSignInFormInput;
