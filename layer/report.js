/*
 * report.js
 */
var self = this; // set the context locally, for access protection

/**
 * Create a new Report that let users create sub-report.
 * @return {Report}
 */
function Report() {
  console.log('layers layer report - Report called'); 
  // add key value pairs here
  // self's are not directly publicly accessible, only through their public method(s)
  // use self's here for protection from direct access
  self._instructions = {}; // will be set, by system, before calling main
  self._proxies = {};  // will be set, by system, before calling main
  self._resource = {}; // will be set, by system, before calling main
}

Report.prototype.instructions = function() {
  return self._instructions;
}

Report.prototype.setinstructions = function(fnOrValue) {
  self._instructions = fnOrValue;
}

Report.prototype.proxies = function() {
  return self._proxies;
}

Report.prototype.setproxies = function(fnOrValue) {
  self._proxies = fnOrValue;
}

Report.prototype.resource = function() {
  return self._resource;
}

Report.prototype.setresource = function(fnOrValue) {
  self._resource = fnOrValue;
}

Report.prototype.execute = function() {  // a function that returns a Promise
  // to do
}

module.exports = Report;
