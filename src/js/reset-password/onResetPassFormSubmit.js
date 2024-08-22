import setFormData from '/js/setFormData';
import getUrlSearchParam from '/js/getUrlSearchParam';
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

  const token = getUrlSearchParam('token');

  fetchResetPassword({ data: resetPasswordData, token });
};

export default onResetPassFormSubmit;
