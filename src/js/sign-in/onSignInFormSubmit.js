import setFormData from '/js/setFormData';
import fetchSignIn from './fetchSignIn';
import refs from './refs';

const onSignInFormSubmit = (e) => {
  e.preventDefault();

  const { name: tokenName, value: tokenValue } = refs.csrfTokenInput;

  const data = { [tokenName]: tokenValue };

  setFormData({ data, form: e.currentTarget });

  fetchSignIn({ CustomerLoginForm: data });
};

export default onSignInFormSubmit;
