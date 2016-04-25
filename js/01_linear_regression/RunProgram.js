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
let WarmUp = require('./WarmUp').WarmUp;

console.log('Running warmUpExercise....\n');
console.log('5x5 Identity Matrix: \n');

WarmUp();

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
console.log('X, y', X, y);
