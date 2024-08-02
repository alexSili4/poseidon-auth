import refs from './refs';
import toggleDisabledBtn from './toggleDisabledBtn';

const setResendPhoneNumberInterval = () => {
  const stepTime = 1;
  let secondsNumber = 60;

  const intervalId = setInterval(() => {
    secondsNumber -= stepTime;

    if (!secondsNumber) {
      clearInterval(intervalId);
      toggleDisabledBtn(refs.confirmPhoneNumberBtn);
    }
  }, stepTime * 1000);
};

export default setResendPhoneNumberInterval;
