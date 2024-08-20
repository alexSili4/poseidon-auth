import setFormData from '/js/setFormData';
import fetchForgotPassword from './fetchForgotPassword';
import refs from './refs';

const onForgotPassFormSubmit = (e) => {
  e.preventDefault();

  const { name: tokenName, value: tokenValue } = refs.csrfTokenInput;

  const data = {};

  setFormData({ data, form: e.currentTarget });

  const forgotPasswordData = {
    CustomerForgotPasswordForm: data,
    [tokenName]: tokenValue,
  };

  fetchForgotPassword(forgotPasswordData);
};

export default onForgotPassFormSubmit;
