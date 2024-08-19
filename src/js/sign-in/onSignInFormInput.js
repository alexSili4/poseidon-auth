import setFormData from '/js/setFormData';
import toggleSignInFormSubmitBtnDisabled from './toggleSignInFormSubmitBtnDisabled';

const onSignInFormInput = (e) => {
  const data = {};

  setFormData({ data, form: e.currentTarget });

  const keys = Object.keys(data);
  const isValidFormData = keys.every((key) => data[key]);

  toggleSignInFormSubmitBtnDisabled(isValidFormData);
};

export default onSignInFormInput;
