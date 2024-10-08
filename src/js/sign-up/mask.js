import Inputmask from 'inputmask';
import constants from '/js/constants';
import refs from './refs';

Inputmask({ mask: constants.phoneExample, clearMaskOnLostFocus: false, placeholder: '', jitMasking: true }).mask(refs.phoneInput);

Inputmask({
  mask: 'da/mo/year',
  clearMaskOnLostFocus: true,
  showMaskOnHover: false,
  showMaskOnFocus: false,
  definitions: {
    d: { validator: '[0-3]', cardinality: 1, placeholder: 'Д' },
    a: { validator: '[0-9]', cardinality: 1, placeholder: 'Д' },
    m: { validator: '[0-1]', cardinality: 1, placeholder: 'М' },
    o: { validator: '[0-9]', cardinality: 1, placeholder: 'М' },
    y: { validator: '[1-2]', cardinality: 1, placeholder: 'Р' },
    e: { validator: '[0-9]', cardinality: 1, placeholder: 'Р' },
    a: { validator: '[0-9]', cardinality: 1, placeholder: 'Р' },
    r: { validator: '[0-9]', cardinality: 1, placeholder: 'Р' },
  },
  jitMasking: true,
}).mask(refs.birthdayInput);
