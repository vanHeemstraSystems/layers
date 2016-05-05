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
  self._proxies = {};  // will be set, before passing on to mapping
}

Report.prototype.proxies = function() {
  return self._proxies;
}

Report.prototype.setproxies = function(fnOrValue) {
  self._proxies = fnOrValue;
}

module.exports = Report;
