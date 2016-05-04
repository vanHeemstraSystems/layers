/*
 * business.js
 */
var self = this; // set the context locally, for access protection

/**
 * Create a new Layer that let users create sub-layer.
 * @return {Layer}
 */
function Business() {
  console.log('layers layer business - Business called'); 
  // add key value pairs here
  // self's are not directly publicly accessible, only through their public method(s)
  // use self's here for protection from direct access
  self._proxies = {};  // will be set, before passing on to mapping
}

Business.prototype.proxies = function() {
  return self._proxies;
}

Business.prototype.setproxies = function(fnOrValue) {
  self._proxies = fnOrValue;
}