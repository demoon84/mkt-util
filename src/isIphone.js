const isIphone = () => {
  return /(iphone)/i.test(navigator.userAgent.toLowerCase());
};

export default isIphone;
