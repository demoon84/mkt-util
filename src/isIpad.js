const isIpad = () => {
  const agent = navigator.userAgent.toLowerCase();

  if (/crios/i.test(navigator.userAgent.toLowerCase())) return false;
  if (/ipad/i.test(navigator.userAgent.toLowerCase())) return true;
  return /macintosh/.test(agent) && navigator.maxTouchPoints > 1;
};

export default isIpad;
