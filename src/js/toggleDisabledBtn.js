import constants from './constants';

const toggleDisabledBtn = (button) => {
  button.toggleAttribute(constants.disabledAttributeName);
};

export default toggleDisabledBtn;
