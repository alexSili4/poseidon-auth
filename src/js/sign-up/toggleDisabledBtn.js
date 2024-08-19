import constants from '/js/constants';

const toggleDisabledBtn = (button) => {
  button.toggleAttribute(constants.disabledAttributeName);
};

export default toggleDisabledBtn;
