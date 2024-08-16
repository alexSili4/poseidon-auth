import setFormData from './setFormData';
import toggleSignUpFormProfileSubmitBtnDisabled from './toggleSignUpFormProfileSubmitBtnDisabled';

const onSignUpFormProfileInput = (e) => {
  const data = { sex: '' };

  setFormData({ data, form: e.currentTarget });

  data.subscription = data.subscription ? 1 : 0;

  const keys = Object.keys(data);
  const isValidFormData = keys.every((key) => data[key] || typeof data[key] === 'number');
  console.log(data);
  toggleSignUpFormProfileSubmitBtnDisabled(isValidFormData);
};

export default onSignUpFormProfileInput;
