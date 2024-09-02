import constants from '/js/constants';
import refs from './refs';
import hideDelProfileModalWin from './hideDelProfileModalWin';

const onDelProfileModalWinBackdropClick = (e) => {
  if (e.currentTarget !== e.target) {
    return;
  }

  refs.delProfileModalWin.classList.add(constants.isHiddenClassName);
  window.removeEventListener('keydown', hideDelProfileModalWin);
};

export default onDelProfileModalWinBackdropClick;
