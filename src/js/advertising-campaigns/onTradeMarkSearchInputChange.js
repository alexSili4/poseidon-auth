import refs from './refs';

const onTradeMarkSearchInputChange = (e) => {
  const { value: searchQuery } = e.currentTarget;

  refs.tradeMarks.forEach((tradeMark) => {
    const tradeMarkName = tradeMark.querySelector('.js-trade-mark-name').textContent;

    const isTargetTradeMarkName = tradeMarkName.toLowerCase().startsWith(searchQuery.toLowerCase());

    if (isTargetTradeMarkName) {
      tradeMark.classList.remove('hidden-element');
    } else {
      tradeMark.classList.add('hidden-element');
    }
  });
};

export default onTradeMarkSearchInputChange;
