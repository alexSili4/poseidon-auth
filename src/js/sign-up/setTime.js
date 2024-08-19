import convertMs from './convertMs';
import refs from './refs';

const setTime = (secondsNumber) => {
  const { minutes, seconds } = convertMs(secondsNumber);
  refs.resendPhoneTimeoutTime.textContent = `${minutes}:${seconds}`;
};

export default setTime;
