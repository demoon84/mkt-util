const getOs = () => {
  const agent = navigator.userAgent.toLowerCase();

  if (agent.indexOf('windows') !== -1) return 'window';

  if ((/macintosh/.test(agent) && navigator.maxTouchPoints > 1) || /iphone|ipad/i.test(navigator.userAgent.toLowerCase())) {
    return 'ios';
  }

  if (agent.indexOf('macintosh') !== -1) return 'macintosh';
  if (agent.indexOf('android') !== -1) return 'android';
};

export default getOs;
