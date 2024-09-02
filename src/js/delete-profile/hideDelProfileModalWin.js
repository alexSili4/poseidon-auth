import refs from './refs';
import constants from '/js/constants';

const hideDelProfileModalWin = (e) => {
  if (e.code === 'Escape') {
    refs.delProfileModalWin.classList.add(constants.isHiddenClassName);
    window.removeEventListener('keydown', hideDelProfileModalWin);
  }
};

export default hideDelProfileModalWin;
