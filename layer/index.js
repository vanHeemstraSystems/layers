/*
 * index.js
 */
var LayerBusiness = require(__dirname+'/business.js');
var LayerData = require(__dirname+'/data.js');
var LayerFlow = require(__dirname+'/flow.js');
var LayerLayout = require(__dirname+'/layout.js');
var LayerMonitor = require(__dirname+'/monitor.js');
var LayerQuery = require(__dirname+'/query.js');
var LayerReport = require(__dirname+'/report.js');

var self = this; // set the context locally, for access protection

/**
 * Create a new Layer that let users create sub-layer.
 * @return {Layer}
 */
function Layer() {
  console.log('layers layer - Layer called'); 
  // add key value pairs here
  // self's are not directly publicly accessible, only through their public method(s)
  // use self's here for protection from direct access
  self._instructions = {}; // will be set
  self._proxies = {};  // will be set
  self._resource = {}; // will be set
}

Layer.prototype.instructions = function() {
  return self._instructions;
}

Layer.prototype.setinstructions = function(fnOrValue) {
  self._instructions = fnOrValue;
}

Layer.prototype.proxies = function() {
  return self._proxies;
}

Layer.prototype.setproxies = function(fnOrValue) {
  self._proxies = fnOrValue;
}


Layer.prototype.resource = function() {
  return self._resource;
}

Layer.prototype.setresource = function(fnOrValue) {
  self._resource = fnOrValue;
}

/**
 * Create a new LayerBusiness object
 * @return {LayerBusiness}
 */
Layer.prototype.business = function() {
  this._layerbusiness = new LayerBusiness();
  this._layerbusiness.setproxies(self._proxies); // Works!
  this._layerbusiness.setresource(self._resource);
  this._layerbusiness.setinstructions(self._instructions);    
  return this._layerbusiness;
}

Layer.prototype.data = function() {
  return new LayerData();
}

Layer.prototype.flow = function() {
  return new LayerFlow();
}

Layer.prototype.layout = function() {
  return new LayerLayout();
}

Layer.prototype.monitor = function() {
  return new LayerMonitor();
}

Layer.prototype.query = function() {
  return new LayerQuery();
}

Layer.prototype.report = function() {
  return new LayerReport();
}

module.exports = Layer;
