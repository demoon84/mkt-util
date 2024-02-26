const isMobile = () => {
  const agent = navigator.userAgent.toLowerCase();

  //iPad
  if (/macintosh/.test(agent) && navigator.maxTouchPoints > 1) return true;

  return /(android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|Mobile Safari)/i.test(agent);
};

export default isMobile;
