/*
 * monitor.js
 */
var self = this; // set the context locally, for access protection

/**
 * Create a new Monitor that let users create sub-monitor.
 * @return {Monitor}
 */
function Monitor() {
  console.log('layers layer monitor - Monitor called'); 
  // add key value pairs here
  // self's are not directly publicly accessible, only through their public method(s)
  // use self's here for protection from direct access
  self._proxies = {};  // will be set, before passing on to mapping
}

Monitor.prototype.proxies = function() {
  return self._proxies;
}

Monitor.prototype.setproxies = function(fnOrValue) {
  self._proxies = fnOrValue;
}

module.exports = Monitor;
