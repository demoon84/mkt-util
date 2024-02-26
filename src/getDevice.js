import isMobile from './isMobile';

const getDevice = () => {
  return isMobile() ? 'mobile' : 'pc';
};

export default getDevice;
