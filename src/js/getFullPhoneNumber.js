import refs from './refs';

const getFullPhoneNumber = () => {
  const prefix = refs.phoneInputPrefix.textContent;
  const phoneNumber = refs.phoneInput.value.split(' ').join('');

  const fullPhoneNumber = prefix + phoneNumber;

  return fullPhoneNumber;
};

export default getFullPhoneNumber;
