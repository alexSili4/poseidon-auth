import hideDelProfileModalWin from './hideDelProfileModalWin';

const onDelProfileBtnClick = (e) => {
  e.currentTarget.blur();

  console.log('delete profile');
  // TODO: after del Profile
  window.removeEventListener('keydown', hideDelProfileModalWin);
};

export default onDelProfileBtnClick;
