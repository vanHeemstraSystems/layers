/*
 * layers.js
 */
var LayersLayer = require(__dirname+'/layer.js');

/**
 * Create a new Layers that let users create sub-layers.
 * @return {Layers}
 */
function Layers() { }

/**
 * Create a new LayersLayer object.
 * @return {LayersLayer}
 */
Layers.prototype.layer = function() {
  return new LayersLayer();
}

module.exports = Layers;
