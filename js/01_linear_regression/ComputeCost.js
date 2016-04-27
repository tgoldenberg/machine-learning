'use strict';

let math = require('mathjs');

let ComputeCost = (X, y, theta) => {
  let m = y.length;
  let J = 0;
  let norm = 1 / (2*m);
  X = math.matrix(X);
  y = math.matrix(y);
  theta = math.matrix(theta);

  let Xtheta = math.multiply(X, theta);
  let XthetaY = math.subtract(Xtheta, y);

  let cost = 0;
  for (let i=0; i<XthetaY._data.length; i++){
    let n = XthetaY._data[i] * XthetaY._data[i];
    cost += n;
  }
  J = norm * cost;
  console.log('J', norm, cost, J);
  return J;
};

module.exports = ComputeCost;
