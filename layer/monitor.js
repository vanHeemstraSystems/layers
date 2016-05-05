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
  self._instructions = {}; // will be set, by system, before calling main
  self._proxies = {};  // will be set, by system, before calling main
  self._resource = {}; // will be set, by system, before calling main
}

Monitor.prototype.instructions = function() {
  return self._instructions;
}

Monitor.prototype.setinstructions = function(fnOrValue) {
  self._instructions = fnOrValue;
}

Monitor.prototype.proxies = function() {
  return self._proxies;
}

Monitor.prototype.setproxies = function(fnOrValue) {
  self._proxies = fnOrValue;
}

Monitor.prototype.resource = function() {
  return self._resource;
}

Monitor.prototype.setresource = function(fnOrValue) {
  self._resource = fnOrValue;
}

Monitor.prototype.execute = function() {  // a function that returns a Promise
  // to do
}

module.exports = Monitor;
