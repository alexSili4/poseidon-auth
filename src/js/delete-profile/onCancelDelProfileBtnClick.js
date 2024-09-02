import hideDelProfileModalWin from './hideDelProfileModalWin';
import refs from './refs';
import constants from '/js/constants';

const onCancelDelProfileBtnClick = (e) => {
  e.currentTarget.blur();

  refs.delProfileModalWin.classList.add(constants.isHiddenClassName);
  window.removeEventListener('keydown', hideDelProfileModalWin);
};

export default onCancelDelProfileBtnClick;
