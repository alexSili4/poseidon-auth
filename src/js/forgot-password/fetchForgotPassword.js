import constants from '/js/constants';
import refs from './refs';

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

    if (!response.ok) {
      const errors = await response.json();

      throw new Error(JSON.stringify({ errors }));
    }

    window.location.href = '/customer';
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
