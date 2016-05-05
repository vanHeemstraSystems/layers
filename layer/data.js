/*
 * data.js
 */
var self = this; // set the context locally, for access protection

/**
 * Create a new Data that let users create sub-data.
 * @return {Data}
 */
function Data() {
  console.log('layers layer data - Data called'); 
  // add key value pairs here
  // self's are not directly publicly accessible, only through their public method(s)
  // use self's here for protection from direct access
  self._proxies = {};  // will be set, before passing on to mapping
}

Data.prototype.proxies = function() {
  return self._proxies;
}

Data.prototype.setproxies = function(fnOrValue) {
  self._proxies = fnOrValue;
}

module.exports = Data;
