import constants from './constants';
import refs from './refs';

const toggleSmsCodeInputsDisabled = () => {
  refs.smsCodeInputs.forEach((input) => {
    input.toggleAttribute(constants.disabledAttributeName);
  });
};

export default toggleSmsCodeInputsDisabled;
