import toggleSmsCodeInputsDisabled from './toggleSmsCodeInputsDisabled';
import fetchSmsCodeConfirm from './fetchSmsCodeConfirm';
import localStorage from './localStorage';
import localStorageKeys from './localStorageKeys';

const checkSmsCode = async (smsCode) => {
  toggleSmsCodeInputsDisabled();

  const phone = localStorage.load(localStorageKeys.phone);
  const data = { SUP1: { sms_code: smsCode, phone } };

  fetchSmsCodeConfirm(data);
};

export default checkSmsCode;
