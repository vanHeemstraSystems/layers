/*
 * index.js
 */
var LayerBusiness = require(__dirname+'/business.js');

var self = this; // set the context locally, for access protection

/**
 * Create a new Layer that let users create sub-layer.
 * @return {Layer}
 */
function Layer() {
  console.log('types type - Type called'); 
  // add key value pairs here
  // self's are not directly publicly accessible, only through their public method(s)
  // use self's here for protection from direct access
  self._foo = {};  // will be set, before passing on to mapping
}

Layer.prototype.foo = function() {
  return self._foo;
}

Layer.prototype.setfoo = function(fnOrValue) {
  self._foo = fnOrValue;
}

/**
 * Create a new LayerBusiness object
 * @return {LayerBusiness}
 */
Layer.prototype.business = function() {
  return new LayerBusiness();
}

module.exports = Layer;
