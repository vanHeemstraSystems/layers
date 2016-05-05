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
  self._instructions = {}; // will be set, by system, before calling main
  self._proxies = {};  // will be set, by system, before calling main
  self._resource = {}; // will be set, by system, before calling main
}

Flow.prototype.instructions = function() {
  return self._instructions;
}

Flow.prototype.setinstructions = function(fnOrValue) {
  self._instructions = fnOrValue;
}

Flow.prototype.proxies = function() {
  return self._proxies;
}

Flow.prototype.setproxies = function(fnOrValue) {
  self._proxies = fnOrValue;
}

Flow.prototype.resource = function() {
  return self._resource;
}

Flow.prototype.setresource = function(fnOrValue) {
  self._resource = fnOrValue;
}

Flow.prototype.execute = function() {  // a function that returns a Promise
  // to do
}

module.exports = Flow;
