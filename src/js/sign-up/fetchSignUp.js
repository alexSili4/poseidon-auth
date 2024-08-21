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
      const errors = await response.json();

      throw new Error(JSON.stringify({ errors }));
    }

    window.location.href = '/customer';
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

    // const isDoubleError = error.message.includes('\n');
    // const isUsernameError = error.message.toLowerCase().includes("ім'я");
    // const isBirthdayError = error.message.toLowerCase().includes('дата народження');
    // if (isDoubleError) {
    //   const errors = error.message.split('\n');
    //   refs.signUpFormInputNameError.textContent = errors[0];
    //   refs.signUpFormInputBirthdayError.textContent = errors[1];
    //   refs.signUpFormInputNameWrap.classList.add(constants.invalidClassName);
    //   refs.signUpFormInputBirthdayWrap.classList.add(constants.invalidClassName);
    // } else if (isUsernameError) {

    // } else if (isBirthdayError) {

    // }
  }
};

export default fetchSignUp;
