/*
 * flow.js
 */
var self = this; // set the context locally, for access protection

/**
 * Create a new Flow that let users create sub-flow.
 * @return {Flow}
 */
function Flow() {
  console.log('layers layer flow - Flow called'); 
  // add key value pairs here
  // self's are not directly publicly accessible, only through their public method(s)
  // use self's here for protection from direct access
  self._proxies = {};  // will be set, before passing on to mapping
}

Flow.prototype.proxies = function() {
  return self._proxies;
}

Flow.prototype.setproxies = function(fnOrValue) {
  self._proxies = fnOrValue;
}

module.exports = Flow;
