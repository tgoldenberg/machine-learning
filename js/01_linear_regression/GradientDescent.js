'use strict';

let math = require('mathjs');
let ComputeCost = require('./ComputeCost');

let GradientDescent = (X, y, theta, alpha, numIters) => {
  let m = y.length;
  let jHistory = new Array(numIters).fill(0).map(() => [0]);
  for (let i=0; i<numIters; i++){
    /*
     * Instructions: Perform a single gradient step on the parameter vector theta.
     *
     * Hint: While debugging, it can be useful to print out the values of the cost
     * function (computeCost) and gradient here
     */
    let x = X.map((v) => v[1]);
    let h = x.map((v) => {
      return theta[0] + theta[1]*v;
    });
    let costZero = h.map((v, idx) => {
        return v - y[idx];
      })
      .reduce((prev, next) => prev + next );

    let costOne = h.map((v, idx) => {
      return (v - y[idx]) * x[idx];
    })
    .reduce((prev, next) => prev + next );

    let thetaZero = theta[0] - alpha * (1/m) * costZero;
    let thetaOne = theta[1] - alpha * (1/m)  * costOne;

    theta = [thetaZero, thetaOne];
    jHistory[i] = ComputeCost(X, y, theta);
  }
  return theta;
};


module.exports = GradientDescent;
