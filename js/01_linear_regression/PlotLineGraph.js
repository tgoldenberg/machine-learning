'use strict';

var CliGraph = require('cli-graph');

let PlotLineGraph = (theta) => {
  var graph = new CliGraph({
    height: 20,
    width: 20,
  });
  graph.setFunctionX(function(x){
    return theta[0] + x*theta[1];
  }, 0, 100);

  console.log(graph.toString());
};

module.exports = PlotLineGraph;
