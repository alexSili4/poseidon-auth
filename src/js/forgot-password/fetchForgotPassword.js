import constants from '/js/constants';
import refs from './refs';
import redirectTo from '/js/redirectTo';

const fetchForgotPassword = async (data) => {
  const url = '/customer/auth/forgot-password';
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

    const emailErrorMessage = errors.find(({ field }) => field === 'email')?.message;

    if (emailErrorMessage) {
      refs.forgotPassFormInputEmailError.textContent = emailErrorMessage;
      refs.forgotPassFormInputEmailWrap.classList.add(constants.invalidClassName);
    }
  }
};

export default fetchForgotPassword;
