/* Exercise #4 - Neural Network

You have to complete the following files -
  SigmoidGradient.js
  RandInitializeWeights.js
  NNCostFunction.js

You do not have to change the code of this file
*/
var jsonfile = require('jsonfile');
var nnCostFunction = require('./nnCostFunction');

let inputLayerSize = 400; /* 20x20 size images */
let hiddenLayerSize = 25; /* 25 hidden layers */
let numLabels = 10; /* 10 labels, 1-10 */

console.log('Loading and visualizing data...');

var digits = jsonfile.readFileSync('digits.json');

let { X, y } = digits;
/* X is 5000x400, y is 1x400 */
let m = X.length; /* number of examples */

var weights = jsonfile.readFileSync('weights.json');

let { Theta1, Theta2 } = weights;

/* Theta1 25x401, Theta2 is 10x26 */
/* COST FUNCTION */
console.log('Calculating cost...');
let lambda = 0;
let J = nnCostFunction({Theta1, Theta2, inputLayerSize, hiddenLayerSize, numLabels, X, y, lambda})
