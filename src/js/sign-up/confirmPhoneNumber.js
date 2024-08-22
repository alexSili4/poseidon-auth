import fetchPhoneNumberConfirm from './fetchPhoneNumberConfirm';
import refs from './refs';
import disabledBtn from '/js/disabledBtn';

const confirmPhoneNumber = async (phoneNumber) => {
  disabledBtn(refs.confirmPhoneNumberBtn);
  const data = { SUP1: { phone: phoneNumber } };

  fetchPhoneNumberConfirm(data);
};

export default confirmPhoneNumber;
