import confirmPhoneNumber from './confirmPhoneNumber';
import getFullPhoneNumber from './getFullPhoneNumber';

const onConfirmPhoneNumberBtnClick = (e) => {
  const fullPhoneNumber = getFullPhoneNumber();

  confirmPhoneNumber(fullPhoneNumber);
};

export default onConfirmPhoneNumberBtnClick;
