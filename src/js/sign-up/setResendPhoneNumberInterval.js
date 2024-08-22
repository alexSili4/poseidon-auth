import refs from './refs';
import setTime from './setTime';
import enableBtn from '/js/enableBtn';
import toggleShowResendPhoneNumberTimeout from './toggleShowResendPhoneNumberTimeout';

const setResendPhoneNumberInterval = () => {
  toggleShowResendPhoneNumberTimeout();
  const stepTime = 1000;
  let secondsNumber = 60 * stepTime;
  setTime(secondsNumber);

  const intervalId = setInterval(() => {
    secondsNumber -= stepTime;
    setTime(secondsNumber);

    if (!secondsNumber) {
      clearInterval(intervalId);
      toggleShowResendPhoneNumberTimeout();
      enableBtn(refs.confirmPhoneNumberBtn);
    }
  }, stepTime);
};

export default setResendPhoneNumberInterval;
