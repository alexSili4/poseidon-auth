import setFormData from './setFormData';
import localStorage from './localStorage';
import localStorageKeys from './localStorageKeys';
import fetchEmailConfirm from './fetchEmailConfirm';

const onSignUpFormEmailSubmit = (e) => {
  e.preventDefault();

  const { phone } = localStorage.load(localStorageKeys.signUpFormPhone);
  const data = {
    phone,
  };

  setFormData({ data, form: e.currentTarget });

  fetchEmailConfirm({ SUP2: data });
};

export default onSignUpFormEmailSubmit;
