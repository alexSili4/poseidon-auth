import constants from '/js/constants';

const disabledBtn = (button) => {
  button.setAttribute(constants.disabledAttributeName, '');
};

export default disabledBtn;
