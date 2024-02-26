const loadJs = (src, callback) => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.setAttribute('src', src);

    if (script.readyState) {
      script.onreadystatechange = () => {
        if (script.readyState === 'loaded' || script.readyState === 'complete') {
          script.onreadystatechange = null;
          callback && callback();
          resolve();
        }
      };
    }
    else {
      script.onload = () => {
        callback && callback();
        resolve();
      };
    }
    document.getElementsByTagName('head')[0].appendChild(script);
  });
};

export default loadJs;
