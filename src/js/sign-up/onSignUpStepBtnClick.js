import refs from './refs';
import constants from '/js/constants';

const onSignUpStepBtnClick = (e) => {
  const targetBtn = e.target.closest('.js-sign-up-step-btn');

  if (!targetBtn) {
    return;
  }

  const { targetForm: targetFormClassName } = targetBtn.dataset;
  const targetForm = document.querySelector(`.${targetFormClassName}`);

  refs.signUpForms.forEach((form) => {
    form.classList.add(constants.displayNoneClassName);
  });

  targetForm.classList.remove(constants.displayNoneClassName);
};

export default onSignUpStepBtnClick;
