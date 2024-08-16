import setFormData from './setFormData';
import toggleSignUpFormProfileSubmitBtnDisabled from './toggleSignUpFormProfileSubmitBtnDisabled';

const onSignUpFormProfileInput = (e) => {
  const data = { sex: '', subscription: 'off' };

  setFormData({ data, form: e.currentTarget });

  const keys = Object.keys(data);
  const isValidFormData = keys.every((key) => data[key]);

  toggleSignUpFormProfileSubmitBtnDisabled(isValidFormData);
};

export default onSignUpFormProfileInput;
