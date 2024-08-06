import constants from './constants';
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
    // const response = await fetch(url, options);

    // if (!response.ok) {
    //   const error = await response.json();
    //   const errorMessage = error[0].message;

    //   throw new Error(errorMessage);
    // }

    // const data = await response.json();
    console.log(data);
    refs.signUpFormEmailInputWrap.classList.add(constants.checkClassName);
    const { password, ...signUpFormEmailData } = data.SUP2;
    localStorage.save({ key: localStorageKeys.signUpFormEmail, value: signUpFormEmailData });

    setTimeout(() => {
      showSignUpFormProfile();
    }, 1000);
  } catch (error) {
    console.log(error);
    refs.signUpFormEmailInputError.textContent = error.message;
    refs.signUpFormInputPassError.textContent = error.message;
    refs.signUpFormEmailInputWrap.classList.add(constants.invalidClassName);
    refs.signUpFormInputPassWrap.classList.add(constants.invalidClassName);
  }
};

export default fetchEmailConfirm;
