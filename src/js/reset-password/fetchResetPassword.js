const fetchResetPassword = async (data) => {
  const url = '/customer/auth/reset-password';
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

    const passwordErrorMessage = errors.find(({ field }) => field === 'password')?.message;

    if (passwordErrorMessage) {
      refs.resetPassFormInputPassError.textContent = passwordErrorMessage;
      refs.resetPassFormInputPassWrap.classList.add(constants.invalidClassName);
    }
  }
};

export default fetchResetPassword;
