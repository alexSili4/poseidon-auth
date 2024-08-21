import setFormData from '/js/setFormData';
import fetchResetPassword from './fetchResetPassword';
import refs from './refs';

const onResetPassFormSubmit = (e) => {
  e.preventDefault();

  const { name: tokenName, value: tokenValue } = refs.csrfTokenInput;

  const data = {};

  setFormData({ data, form: e.currentTarget });

  const resetPasswordData = {
    CustomerResetPasswordForm: data,
    [tokenName]: tokenValue,
  };

  fetchResetPassword(resetPasswordData);
};

export default onResetPassFormSubmit;
