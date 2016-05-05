/*
 * query.js
 */
var self = this; // set the context locally, for access protection

/**
 * Create a new Query that let users create sub-query.
 * @return {Query}
 */
function Query() {
  console.log('layers layer query - Query called'); 
  // add key value pairs here
  // self's are not directly publicly accessible, only through their public method(s)
  // use self's here for protection from direct access
  self._instructions = {}; // will be set, by system, before calling main
  self._proxies = {};  // will be set, by system, before calling main
  self._resource = {}; // will be set, by system, before calling main
}

Query.prototype.instructions = function() {
  return self._instructions;
}

Query.prototype.setinstructions = function(fnOrValue) {
  self._instructions = fnOrValue;
}

Query.prototype.proxies = function() {
  return self._proxies;
}

Query.prototype.setproxies = function(fnOrValue) {
  self._proxies = fnOrValue;
}

Query.prototype.resource = function() {
  return self._resource;
}

Query.prototype.setresource = function(fnOrValue) {
  self._resource = fnOrValue;
}

Query.prototype.execute = function() {  // a function that returns a Promise
  // to do
}

module.exports = Query;
