import DOMNodeCollection from './dom_node_collection';

let _docReadyCallbacks = [];
let _docReady = false;
window.$f = (arg) => {

  switch (typeof(arg)) {
    case 'function':
      return queueDocReadyCallback(arg);
    case 'string':
      let nodes = Array.from(document.querySelectorAll(arg));
      return new DOMNodeCollection(nodes);
    default:
      return new DOMNodeCollection([arg]);
  }
};

window.$f.extend = (...args) => {
  return Object.assign(...args);
};

window.$f.ajax = (options) => {
  const request = new XMLHttpRequest();

  const defaults = {
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    method: 'GET',
    url: '',
    data: {},
    success: (response) => console.log(response),
    error: (error) => console.log(error)
  };

  options = window.$f.extend(defaults, options);

  options.method = options.method.toUpperCase();

  request.open(options.method, options.url);

  request.onload = () => {
    let response = JSON.parse(request.response);
    if(request.status === 200) {
      options.success(response);
    } else {
      options.error(response);
    }
  };

  const optionalData = options.data;
  request.send(JSON.stringify(optionalData));

};

const queueDocReadyCallback = (callback) => {
  if (!_docReady) {
    _docReadyCallbacks.push(callback);
  } else {
    callback();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  _docReady = true;
  _docReadyCallbacks.forEach( callback => callback() );
});
