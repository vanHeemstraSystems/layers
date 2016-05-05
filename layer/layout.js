/*
 * layout.js
 */
var self = this; // set the context locally, for access protection

/**
 * Create a new Layout that let users create sub-layout.
 * @return {Layout}
 */
function Layout() {
  console.log('layers layer layout - Layout called'); 
  // add key value pairs here
  // self's are not directly publicly accessible, only through their public method(s)
  // use self's here for protection from direct access
  self._instructions = {}; // will be set, by system, before calling main
  self._proxies = {};  // will be set, by system, before calling main
  self._resource = {}; // will be set, by system, before calling main
}

Layout.prototype.instructions = function() {
  return self._instructions;
}

Layout.prototype.setinstructions = function(fnOrValue) {
  self._instructions = fnOrValue;
}

Layout.prototype.proxies = function() {
  return self._proxies;
}

Layout.prototype.setproxies = function(fnOrValue) {
  self._proxies = fnOrValue;
}

Layout.prototype.resource = function() {
  return self._resource;
}

Layout.prototype.setresource = function(fnOrValue) {
  self._resource = fnOrValue;
}

Layout.prototype.execute = function() {  // a function that returns a Promise
  // to do
}

module.exports = Layout;
