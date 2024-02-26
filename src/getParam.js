const getParam = (paramName) => {
  let href = window.location.href;

  if (href.indexOf('?') > -1) {
    let compareString = paramName + '=';
    let queryString = href.substr(href.indexOf('?') + 1);
    let queryList = queryString.split('&');

    for (let i = 0; i < queryList.length; i++) {
      let str = queryList[i];

      if (str.substr(0, compareString.length) === compareString) {
        return str.split('=')[1];
      }
    }
  }
};

export default getParam;
