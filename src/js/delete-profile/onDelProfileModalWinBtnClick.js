import hideDelProfileModalWin from './hideDelProfileModalWin';
import refs from './refs';
import constants from '/js/constants';

const onDelProfileModalWinBtnClick = (e) => {
  e.currentTarget.blur();

  refs.delProfileModalWin.classList.remove(constants.isHiddenClassName);
  window.addEventListener('keydown', hideDelProfileModalWin);
};

export default onDelProfileModalWinBtnClick;
