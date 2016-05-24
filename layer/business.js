/*
 * Filename: business.js
 */
var self = this; // Set the context locally, for access protection

/**
 * Create a new Business that let users create sub-business.
 * @return {Business}
 */
function Business() {
  console.log('layers layer business - Business called')
  // Add key value pairs here
  // Self's are not directly publicly accessible, only through their public method(s)
  // Use self's here for protection from direct access
  self._instructions = {}; // Will be set, by system, before calling main
  self._proxies = {};  // Will be set, by system, before calling main
  self._resource = {}; // Will be set, by system, before calling main
}

Business.prototype.instructions = function() {
  return self._instructions;
}

Business.prototype.setinstructions = function(fnOrValue) {
  self._instructions = fnOrValue;
}

Business.prototype.proxies = function() {
  return self._proxies;
}

Business.prototype.setproxies = function(fnOrValue) {
  self._proxies = fnOrValue;
}

Business.prototype.resource = function() {
  return self._resource;
}

Business.prototype.setresource = function(fnOrValue) {
  self._resource = fnOrValue;
}

Business.prototype.execute = function() {  // A function that returns a Promise
  console.log('layers layer business execute - called');
  var _promise = self._proxies.proxy().libraries().library().promise();
  var _join = _promise.join;
  var _Me = {}; // COME UP WITH SOMETHING ELSE THAN _Me
  return new _promise(function(resolve) {

    // Let the layer handle the mains.main object for further processing....

    // console.log('layers layer business execute - self._resource: ', self._resource); // Works: e.g. _6e8bc430_9c3a_11d9_9669_0800200c9a66 { URI: 'urn:uuid:6e8bc430-9c3a-11d9-9669-0800200c9a66' }

    var _main = self._proxies.proxy().mains().main();
    console.log('layers layer business execute - _main: ',
      _main);

    _main.setproxies(self._proxies);
    console.log('layers layer business execute - _main.proxies(): ',
      _main.proxies())

    _main.setresource(self._resource);
    console.log('layers layer business execute - _main.resource(): ',
      _main.resource())

    _main.setinstructions(self._instructions);
    console.log('layers layer business execute - _main.instructions(): ',
      _main.instructions())

    _join(_main.execute(), function(result) {
      console.log('layers layer business execute - main result: ', result);

      _Me.result = result;
        //return(result); // DON'T DO THIS

    })
    .catch(function(error) {
      console.log('layers layer business execute - main.execute() error: ',
        error)
    })
    .finally(function() {
      console.log('layers layer business execute - main.execute() finally')
    }); // EOF join main.execute()

    console.log('layers layer business execute \
      - resolve(_Me)') // COME UP WITH SOMETHING ELSE THAN _Me
    resolve(_Me); // COME UP WITH SOMETHING ELSE THAN _Me

  }) // EOF promise
  .catch(function(error) {
    console.log('layers layer business execute - error: ',
      error)
  }) // EOF catch
  .finally(function() {
    console.log('layers layer business execute - finally')
  }); // EOF finally
}

module.exports = Business;
