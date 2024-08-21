import constants from '/js/constants';
import setFormData from '/js/setFormData';
import toggleResetPassFormSubmitBtnDisabled from './toggleResetPassFormSubmitBtnDisabled';

const onResetPassFormInput = (e) => {
  const data = {};

  setFormData({ data, form: e.currentTarget });

  const isValidPassLength = data.password.length >= constants.passMinLength;
  const isValidFormData = isValidPassLength;

  toggleResetPassFormSubmitBtnDisabled(isValidFormData);
};

export default onResetPassFormInput;
