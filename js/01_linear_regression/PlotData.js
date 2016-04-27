'use strict';

let CliGraph = require('cli-graph');
let FunctionGraph = require('function-graph');
let PlotData = (X, y) => {
  var graph = new CliGraph({
    height: 20,
    width: 20,
  });
  let maxX = null;
  let maxY = null;
  for (let i=0; i<X.length; i++){
    if (maxX == null || X[i] > maxX){ maxX = X[i]; }
    if (maxY == null || y[i] > maxY){ maxY = y[i]; }
    graph.addPoint(X[i], y[i]);
  }
  console.log('maxX', maxX, maxY);
  console.log(graph.toString());
};

module.exports = PlotData;
