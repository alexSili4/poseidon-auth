import constants from '/js/constants';
import refs from './refs';
import redirectTo from '/js/redirectTo';
import clearSignUpFormLocalStorage from './clearSignUpFormLocalStorage';

const fetchSignUp = async (data) => {
  const url = '/customer/sign-up/set-username';
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errors = await response.json();

      throw new Error(JSON.stringify({ errors }));
    }

    clearSignUpFormLocalStorage();
    redirectTo(response);
  } catch (error) {
    const { errors } = JSON.parse(error.message);

    const usernameErrorMessage = errors.find(({ field }) => field === 'username')?.message;
    const birthdayErrorMessage = errors.find(({ field }) => field === 'birthday')?.message;

    if (usernameErrorMessage) {
      refs.signUpFormInputNameError.textContent = usernameErrorMessage;
      refs.signUpFormInputNameWrap.classList.add(constants.invalidClassName);
    }

    if (birthdayErrorMessage) {
      refs.signUpFormInputBirthdayError.textContent = birthdayErrorMessage;
      refs.signUpFormInputBirthdayWrap.classList.add(constants.invalidClassName);
    }
  }
};

export default fetchSignUp;
