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
  signUpEmailStep: document.querySelector('.js-sign-up-email-step'),
  signUpFormToggleShowPassBtn: document.querySelector('.js-sign-up-form-toggle-show-password-btn'),
  signUpFormInputPass: document.querySelector('.js-sign-up-form-input-password'),
  signUpFormEmail: document.querySelector('.js-sign-up-form-email'),
};

export default refs;
