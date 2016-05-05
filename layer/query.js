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
  self._proxies = {};  // will be set, before passing on to mapping
}

Query.prototype.proxies = function() {
  return self._proxies;
}

Query.prototype.setproxies = function(fnOrValue) {
  self._proxies = fnOrValue;
}

module.exports = Query;
