const loadCss = (src, callback) => {
  return new Promise((resolve) => {
    const css = document.createElement('link');
    css.setAttribute('rel', 'stylesheet');
    css.setAttribute('href', src);

    if (css.readyState) {
      css.onreadystatechange = () => {
        if (css.readyState === 'loaded' || css.readyState === 'complete') {
          css.onreadystatechange = null;
          callback && callback();
          resolve();
        }
      };
    }
    else {
      css.onload = () => {
        callback && callback();
        resolve();
      };
    }

    document.getElementsByTagName('head')[0].appendChild(css);
  });
};

export default loadCss;
