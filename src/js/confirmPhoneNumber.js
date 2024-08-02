import fetchPhoneNumberConfirm from './fetchPhoneNumberConfirm';
import refs from './refs';
import toggleDisabledBtn from './toggleDisabledBtn';

const confirmPhoneNumber = async (phoneNumber) => {
  toggleDisabledBtn(refs.confirmPhoneNumberBtn);
  const data = { phone: phoneNumber };

  fetchPhoneNumberConfirm(data);
};

export default confirmPhoneNumber;
