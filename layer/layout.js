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
  self._proxies = {};  // will be set, before passing on to mapping
}

Layout.prototype.proxies = function() {
  return self._proxies;
}

Layout.prototype.setproxies = function(fnOrValue) {
  self._proxies = fnOrValue;
}

module.exports = Layout;
