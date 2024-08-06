const refs = {
  signUpFormPhone: document.querySelector('.js-sign-up-form-phone'),
  smsCodeInputWrap: document.querySelector('.js-sign-up-form-input-sms-code-wrap'),
  smsCodeInputs: document.querySelectorAll('.js-sign-up-form-input-sms-code'),
  smsCodeError: document.querySelector('.js-sign-up-form-input-sms-code-error'),
  phoneInputWrap: document.querySelector('.js-sign-up-form-input-phone-wrap'),
  phoneInput: document.querySelector('.js-auth-form-input-phone'),
  phoneError: document.querySelector('.js-sign-up-form-input-phone-error'),
  phoneInputPrefix: document.querySelector('.js-auth-form-input-phone-prefix'),
  confirmPhoneNumberBtn: document.querySelector('.js-sign-up-form-confirm-phone-btn'),
  phoneFormNextBtn: document.querySelector('.js-sign-up-form-phone-next'),
  resendPhoneTimeout: document.querySelector('.js-sign-up-form-resend-phone-timeout'),
  resendPhoneTimeoutTime: document.querySelector('.js-sign-up-form-resend-phone-timeout-time'),
  signUpPhoneStep: document.querySelector('.js-sign-up-phone-step'),
  // email
  signUpEmailStep: document.querySelector('.js-sign-up-email-step'),
  signUpFormEmail: document.querySelector('.js-sign-up-form-email'),
  signUpFormEmailSubmitBtn: document.querySelector('.js-sign-up-form-email-submit'),
  signUpFormEmailInputWrap: document.querySelector('.js-sign-up-form-input-email-wrap'),
  signUpFormEmailInputError: document.querySelector('.js-sign-up-form-input-email-error'),
  signUpFormInputPassWrap: document.querySelector('.js-sign-up-form-input-password-wrap'),
  signUpFormInputPass: document.querySelector('.js-sign-up-form-input-password'),
  signUpFormInputPassError: document.querySelector('.js-sign-up-form-input-password-error'),
  signUpFormToggleShowPassBtn: document.querySelector('.js-sign-up-form-toggle-show-password-btn'),
  //profile
  signUpStepProfile: document.querySelector('.js-sign-up-step-profile'),
  signUpFormProfile: document.querySelector('.js-sign-up-form-profile'),
};

export default refs;
