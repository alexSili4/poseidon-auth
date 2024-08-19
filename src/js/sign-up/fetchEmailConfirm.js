import constants from '/js/constants';
import localStorage from './localStorage';
import localStorageKeys from './localStorageKeys';
import refs from './refs';
import showSignUpFormProfile from './showSignUpFormProfile';

const fetchEmailConfirm = async (data) => {
  const url = '/customer/sign-up/send-to-email';
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
      const emailErrorMessage = errors.find(({ field }) => field === 'email')?.message;
      const passwordErrorMessage = errors.find(({ field }) => field === 'password')?.message;
      if (emailErrorMessage && passwordErrorMessage) {
        errorMessage = `${emailErrorMessage}\n${passwordErrorMessage}`;
      } else {
        errorMessage = emailErrorMessage || passwordErrorMessage;
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();
    refs.signUpFormEmailInputWrap.classList.add(constants.checkClassName);
    const { password, ...signUpFormEmailData } = data;
    localStorage.save({ key: localStorageKeys.signUpFormEmail, value: signUpFormEmailData });

    setTimeout(() => {
      showSignUpFormProfile();
    }, 1000);
  } catch (error) {
    const isDoubleError = error.message.includes('\n');
    const isEmailError = error.message.toLowerCase().includes('email');
    const isPasswordError = error.message.toLowerCase().includes('пароль');

    if (isDoubleError) {
      const errors = error.message.split('\n');
      refs.signUpFormEmailInputError.textContent = errors[0];
      refs.signUpFormInputPassError.textContent = errors[1];
      refs.signUpFormEmailInputWrap.classList.add(constants.invalidClassName);
      refs.signUpFormInputPassWrap.classList.add(constants.invalidClassName);
    } else if (isEmailError) {
      refs.signUpFormEmailInputError.textContent = error.message;
      refs.signUpFormEmailInputWrap.classList.add(constants.invalidClassName);
    } else if (isPasswordError) {
      refs.signUpFormInputPassError.textContent = error.message;
      refs.signUpFormInputPassWrap.classList.add(constants.invalidClassName);
    }
  }
};

export default fetchEmailConfirm;
