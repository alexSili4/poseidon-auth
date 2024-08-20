import constants from '/js/constants';
import refs from './refs';

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
      let errorMessage = '';
      const errors = await response.json();
      const usernameErrorMessage = errors.find(({ field }) => field === 'username')?.message;
      const birthdayErrorMessage = errors.find(({ field }) => field === 'birthday')?.message;
      if (usernameErrorMessage && birthdayErrorMessage) {
        errorMessage = `${usernameErrorMessage}\n${birthdayErrorMessage}`;
      } else {
        errorMessage = usernameErrorMessage || birthdayErrorMessage;
      }

      throw new Error(errorMessage);
    }

    window.location.href = '/customer';
  } catch (error) {
    const isDoubleError = error.message.includes('\n');
    const isUsernameError = error.message.toLowerCase().includes("ім'я");
    const isBirthdayError = error.message.toLowerCase().includes('дата народження');

    if (isDoubleError) {
      const errors = error.message.split('\n');
      refs.signUpFormInputNameError.textContent = errors[0];
      refs.signUpFormInputBirthdayError.textContent = errors[1];
      refs.signUpFormInputNameWrap.classList.add(constants.invalidClassName);
      refs.signUpFormInputBirthdayWrap.classList.add(constants.invalidClassName);
    } else if (isUsernameError) {
      refs.signUpFormInputNameError.textContent = error.message;
      refs.signUpFormInputNameWrap.classList.add(constants.invalidClassName);
    } else if (isBirthdayError) {
      refs.signUpFormInputBirthdayError.textContent = error.message;
      refs.signUpFormInputBirthdayWrap.classList.add(constants.invalidClassName);
    }
  }
};

export default fetchSignUp;
