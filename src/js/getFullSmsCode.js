const getFullSmsCode = ({ smsCodeSymbols, targetLength }) => {
  const fullSmsCode = Object.values(smsCodeSymbols).join('');
  const isFullSmsCode = fullSmsCode.length === targetLength;

  return { fullSmsCode, isFullSmsCode };
};

export default getFullSmsCode;
