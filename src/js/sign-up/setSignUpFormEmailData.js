import refs from './refs';

const setSignUpFormEmailData = (data) => {
  const { email } = data;

  refs.emailInput.value = email;
};

export default setSignUpFormEmailData;
