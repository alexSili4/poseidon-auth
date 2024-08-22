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
  // email
  signUpFormEmail: document.querySelector('.js-sign-up-form-email'),
  signUpFormEmailSubmitBtn: document.querySelector('.js-sign-up-form-email-submit'),
  signUpFormEmailInputWrap: document.querySelector('.js-sign-up-form-input-email-wrap'),
  emailInput: document.querySelector('.js-auth-form-input-email'),
  signUpFormEmailInputError: document.querySelector('.js-sign-up-form-input-email-error'),
  signUpFormInputPassWrap: document.querySelector('.js-sign-up-form-input-password-wrap'),
  signUpFormInputPass: document.querySelector('.js-sign-up-form-input-password'),
  signUpFormInputPassError: document.querySelector('.js-sign-up-form-input-password-error'),
  signUpFormToggleShowPassBtn: document.querySelector('.js-sign-up-form-toggle-show-password-btn'),
  //profile
  signUpFormProfile: document.querySelector('.js-sign-up-form-profile'),
  birthdayInput: document.querySelector('.js-auth-form-input-birthday'),
  signUpFormProfileSubmitBtn: document.querySelector('.js-sign-up-form-profile-submit'),
  signUpFormInputNameError: document.querySelector('.js-sign-up-form-input-name-error'),
  signUpFormInputBirthdayError: document.querySelector('.js-sign-up-form-input-birthday-error'),
  signUpFormInputNameWrap: document.querySelector('.js-sign-up-form-input-name-wrap'),
  signUpFormInputBirthdayWrap: document.querySelector('.js-sign-up-form-input-birthday-wrap'),
  // steps-list
  signUpPhoneStep: document.querySelector('.js-sign-up-phone-step'),
  signUpEmailStep: document.querySelector('.js-sign-up-email-step'),
  signUpStepProfile: document.querySelector('.js-sign-up-step-profile'),
  signUpFormStepsList: document.querySelector('.js-sign-up-form-steps-list'),
  signUpPhoneStepBtn: document.querySelector('.js-sign-up-phone-step-btn'),
  signUpEmailStepBtn: document.querySelector('.js-sign-up-email-step-btn'),
  signUpStepProfileBtn: document.querySelector('.js-sign-up-step-profile-btn'),
  //other
  signUpForms: document.querySelectorAll('.js-sign-up-form'),
};

export default refs;
