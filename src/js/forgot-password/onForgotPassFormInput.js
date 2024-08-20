import validateValue from '/js/validateValue';
import constants from '/js/constants';
import setFormData from '/js/setFormData';
import toggleForgotPassFormSubmitBtnDisabled from './toggleForgotPassFormSubmitBtnDisabled';

const onForgotPassFormInput = (e) => {
  const data = {};

  setFormData({ data, form: e.currentTarget });

  const isValidEmail = validateValue({ value: data.email, regExp: constants.emailRegExp });
  const isValidFormData = isValidEmail;

  toggleForgotPassFormSubmitBtnDisabled(isValidFormData);
};

export default onForgotPassFormInput;
