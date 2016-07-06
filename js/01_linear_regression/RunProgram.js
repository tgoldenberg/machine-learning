'use strict';

/* ML Exercise 1: Linear Regression
 *
 * INSTRUCTIONS
 * ------------
 *
 *  You need to finish the following functions for this exercise
 *  WarmUp.js
 *  PlotData.js
 *  GradientDescent.js
 *  ComputeCost.js
 *  GradientDescentMulti.js
 *  ComputeCostMulti.js
 *  FeatureNormalize.js
 *  NormalEqn.js
 *
 *  x refers to the population size in 10,000s
 *  y refers to the profit in $10,000s
 *
 *  Initialization
 */

let fs = require('fs');
let WarmUp = require('./WarmUp');
let PlotData = require('./PlotData');
let PlotLineGraph = require('./PlotLineGraph');
let ComputeCost = require('./ComputeCost');
let GradientDescent = require('./GradientDescent');

console.log('Running warmUpExercise....\n');
console.log('5x5 Identity Matrix: \n');

WarmUp(5);

console.log('Program paused. Press enter to continue.\n');

console.log('Plotting Data...\n');
let filename = './data1.txt';
let file = fs.readFileSync(filename, 'utf8');
let X = [], y = [];
file.split('\n').forEach((line) => {
  if (! line ) { return; }
  let a = line.split(',').map((i) => parseFloat(i));
  X.push(a[0]);
  y.push(a[1]);
});
let m = y.length;

PlotData(X, y);

console.log('Program paused. Press enter to continue.\n');
console.log('Running Gradient Descent...\n');

X = X.map((i) => [1, i]);
let theta = [0, 0];
let iterations = 100;
let alpha = 0.01;

ComputeCost(X, y, theta);

theta = GradientDescent(X, y, theta, alpha, iterations);

console.log('Theta found by gradient descent: ');
console.log('THETA', theta);

PlotLineGraph(theta);
/* TODO:
 * 1. Plot line graph of regression
 * 2. Plot 2D grid of gradient descent
 * 3. Print prediction for given parameters
 */
