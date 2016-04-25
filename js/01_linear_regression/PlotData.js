'use strict';

let FunctionGraph = require('function-graph');
let PlotData = (X, y) => {
  var graph = new FunctionGraph({
    height: 30,
    width: 60,
    marks: {
      hAxis: '__',
      vAxis: '|',
      center: '+',
      point: '*'
    },
  });
  for (let i=0; i<X.length; i++){
    graph.addPoint(X[i], y[i]);
  }
  console.log(graph.toString());
};

module.exports = {
  PlotData,
};
