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
      const errors = await response.json();

      throw new Error(JSON.stringify({ errors }));
    }

    const data = await response.json();
    const { password, ...signUpFormEmailData } = data;
    localStorage.save({ key: localStorageKeys.signUpFormEmail, value: signUpFormEmailData });

    refs.signUpFormEmailInputWrap.classList.add(constants.checkClassName);

    setTimeout(() => {
      showSignUpFormProfile();
    }, 1000);
  } catch (error) {
    const { errors } = JSON.parse(error.message);

    const emailErrorMessage = errors.find(({ field }) => field === 'email')?.message;
    const passwordErrorMessage = errors.find(({ field }) => field === 'password')?.message;

    if (emailErrorMessage) {
      refs.signUpFormEmailInputError.textContent = emailErrorMessage;
      refs.signUpFormEmailInputWrap.classList.add(constants.invalidClassName);
    }

    if (passwordErrorMessage) {
      refs.signUpFormInputPassError.textContent = passwordErrorMessage;
      refs.signUpFormInputPassWrap.classList.add(constants.invalidClassName);
    }
  }
};

export default fetchEmailConfirm;
