import setFormData from '/js/setFormData';
import fetchSignIn from './fetchSignIn';
import refs from './refs';

const onSignInFormSubmit = (e) => {
  e.preventDefault();

  const { name: tokenName, value: tokenValue } = refs.csrfTokenInput;

  const data = {};

  setFormData({ data, form: e.currentTarget });

  const signInData = {
    CustomerLoginForm: data,
    [tokenName]: tokenValue,
  };

  fetchSignIn(signInData);
};

export default onSignInFormSubmit;
