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
  self._instructions = {}; // will be set, by system, before calling main
  self._proxies = {};  // will be set, by system, before calling main
  self._resource = {}; // will be set, by system, before calling main
}

Data.prototype.instructions = function() {
  return self._instructions;
}

Data.prototype.setinstructions = function(fnOrValue) {
  self._instructions = fnOrValue;
}

Data.prototype.proxies = function() {
  return self._proxies;
}

Data.prototype.setproxies = function(fnOrValue) {
  self._proxies = fnOrValue;
}

Data.prototype.resource = function() {
  return self._resource;
}

Data.prototype.setresource = function(fnOrValue) {
  self._resource = fnOrValue;
}

Data.prototype.execute = function() {  // a function that returns a Promise
  // to do
}

module.exports = Data;
