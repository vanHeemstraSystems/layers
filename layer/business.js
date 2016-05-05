/*
 * business.js
 */
var self = this; // set the context locally, for access protection

/**
 * Create a new Business that let users create sub-business.
 * @return {Business}
 */
function Business() {
  console.log('layers layer business - Business called'); 
  // add key value pairs here
  // self's are not directly publicly accessible, only through their public method(s)
  // use self's here for protection from direct access
  self._instructions = {}; // will be set, by system, before calling main
  self._proxies = {};  // will be set, by system, before calling main
  self._resource = {}; // will be set, by system, before calling main
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

Business.prototype.execute = function() {  // a function that returns a Promise


  // let the layer handle the mains.main object for further processing....

  console.log('layers layer business execute - self._resource: ', self._resource); // Works: e.g. _6e8bc430_9c3a_11d9_9669_0800200c9a66 { URI: 'urn:uuid:6e8bc430-9c3a-11d9-9669-0800200c9a66' }

  var main = self._proxies.proxy().mains().main();
  console.log('layers layer business execute - main: ', main);
  main.setproxies(self._proxies);

  console.log('layers layer business execute - main.proxies(): ', main.proxies());

  main.setresource(self._resource); 

  console.log('layers layer business execute - main.resource(): ', main.resource());
  

  // THE NEXT STEP DEPENDS ON WHAT IS INSIDE self._instructions (e.g. start, restart, stop etc.)
          var promise = self._proxies.proxy().libraries().library().promise();
          var join = promise.join;
          // Start of the run chain
          join(main.run(), function(run) {
            console.log('layers layer business execute - run: ', run);
            return(run);
          }); // eof join main.run()

  

}

module.exports = Business;
