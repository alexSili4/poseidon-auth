import toggleSmsCodeInputsDisabled from './toggleSmsCodeInputsDisabled';
import fetchSmsCodeConfirm from './fetchSmsCodeConfirm';

const checkSmsCode = async (smsCode) => {
  toggleSmsCodeInputsDisabled();

  const data = { sms_code: smsCode };

  fetchSmsCodeConfirm(data);
};

export default checkSmsCode;
