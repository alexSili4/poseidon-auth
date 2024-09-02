import refs from './refs';
import onDelProfileModalWinBtnClick from './onDelProfileModalWinBtnClick';
import onCancelDelProfileBtnClick from './onCancelDelProfileBtnClick';
import onDelProfileBtnClick from './onDelProfileBtnClick';
import onDelProfileModalWinCloseBtnClick from './onDelProfileModalWinCloseBtnClick';
import onDelProfileModalWinBackdropClick from './onDelProfileModalWinBackdropClick';

refs.delProfileModalWinBtn.addEventListener('click', onDelProfileModalWinBtnClick);

refs.cancelDelProfileBtn.addEventListener('click', onCancelDelProfileBtnClick);

refs.delProfileBtn.addEventListener('click', onDelProfileBtnClick);

refs.delProfileModalWinCloseBtn.addEventListener('click', onDelProfileModalWinCloseBtnClick);

refs.delProfileModalWinBackdrop.addEventListener('click', onDelProfileModalWinBackdropClick);
