import toggleConfirmPhoneNumberBtnDisabled from './toggleConfirmPhoneNumberBtnDisabled';

const onPhoneInputChange = (e) => {
  const { value } = e.currentTarget;

  const isValidPhoneLength = toggleConfirmPhoneNumberBtnDisabled(value);
};

export default onPhoneInputChange;
