import Inputmask from 'inputmask';
import refs from '/js/refs';
import constants from '/js/constants';

Inputmask({ mask: constants.phoneExample, clearMaskOnLostFocus: false, placeholder: '' }).mask(refs.phoneInput);
