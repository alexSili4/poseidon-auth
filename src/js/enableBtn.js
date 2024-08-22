import constants from '/js/constants';

const enableBtn = (button) => {
  button.removeAttribute(constants.disabledAttributeName);
};

export default enableBtn;
