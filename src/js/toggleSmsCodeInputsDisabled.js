import constants from './constants';
import refs from './refs';

const toggleSmsCodeInputsDisabled = () => {
  refs.smsCodeInputs.forEach((input) => {
    input.toggleAttribute(constants.disabledAttributeName);
  });

  refs.smsCodeInputs[0].focus();
};

export default toggleSmsCodeInputsDisabled;
