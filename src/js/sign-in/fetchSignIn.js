import constants from '/js/constants';
import refs from './refs';
import redirectTo from '/js/redirectTo';

const fetchSignIn = async (data) => {
  const url = '/customer/auth/login';
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'X-Requested-With': 'XMLHttpRequest',
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok && response.status !== 302) {
      const errors = await response.json();

      throw new Error(JSON.stringify({ errors }));
    }

    redirectTo(response);
  } catch (error) {
    const { errors } = JSON.parse(error.message);

    const loginErrorMessage = errors.find(({ field }) => field === 'login')?.message;

    const passwordErrorMessage = errors.find(({ field }) => field === 'password')?.message;

    if (loginErrorMessage) {
      refs.signInFormInputLoginError.textContent = loginErrorMessage;
      refs.signInFormInputLoginWrap.classList.add(constants.invalidClassName);
    }

    if (passwordErrorMessage) {
      refs.signInFormInputPassError.textContent = passwordErrorMessage;
      refs.signInFormInputPassWrap.classList.add(constants.invalidClassName);
    }
  }
};

export default fetchSignIn;
