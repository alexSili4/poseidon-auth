import hideDelProfileModalWin from './hideDelProfileModalWin';
import fetchDelProfile from './fetchDelProfile';
import refs from './refs';

const onDelProfileBtnClick = (e) => {
  e.currentTarget.blur();

  const { name: tokenName, value: tokenValue } = refs.csrfTokenInput;
  const delProfileData = {
    [tokenName]: tokenValue,
  };
  fetchDelProfile(delProfileData);

  window.removeEventListener('keydown', hideDelProfileModalWin);
};

export default onDelProfileBtnClick;
