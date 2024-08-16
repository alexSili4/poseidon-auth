import setFormData from './setFormData';
import localStorage from './localStorage';
import localStorageKeys from './localStorageKeys';
import fetchSignUp from './fetchSignUp';

const onSignUpFormProfileSubmit = (e) => {
  e.preventDefault();

  const { phone } = localStorage.load(localStorageKeys.signUpFormEmail);
  const data = {
    phone,
  };

  setFormData({ data, form: e.currentTarget });

  data.subscription = data.subscription ? 1 : 0;
  data.birthday = data.birthday.split('/').reduceRight((acc, item) => `${acc}-${item}`);

  fetchSignUp({ SUP3: data });
};

export default onSignUpFormProfileSubmit;
