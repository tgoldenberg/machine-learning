var math = require('mathjs');
var sigmoid = require('sigmoid');

function nnCostFunction(options){
  console.log('OPTIONS', Object.keys(options));
  let { Theta1, Theta2, inputLayerSize, hiddenLayerSize, numLabels, X, y, lambda } = options;
  // Theta1 = reshapeTheta(Theta1);
  // Theta2 = reshapeTheta(Theta2);
  let m = X.length;
  let J = 0;
  let Theta1Grad = new Array(Theta1.length).fill(0).map(a => 0);
  let Theta2Grad = new Array(Theta2.length).fill(0).map(a => 0);
  let a1 = addBiasUnit(X);
  let transposedTheta1 = transposeTheta(Theta1);
  let z2 = math.multiply(a1, transposedTheta1)._data;
  let a2 = getA2(z2)
  let transposedTheta2 = transposeTheta(Theta2);
  let z3 = math.multiply(a2, transposedTheta2)._data;
  let a3 = z3.map(row => {
    return row.map(item => { return sigmoid(item)});
  });
  let h = a3;


  console.log('A3', a3.length, a3[0].length);
  console.log('Y', y);
}

// J = sum(sum((-Y).*log(h) - (1 - Y).*log(1-h), 2))/m

function getA2(z2){
  let m = z2.map(row => {
    let r = row.map(item => sigmoid(item));
    return [1].concat(r);
  })
  return math.matrix(m);
}

function transposeTheta(theta){
  var m = math.matrix(theta);
  return math.transpose(m);
}

function addBiasUnit(x){
  console.log('Adding bias unit...');
  let arr = x.map(row => {
    return [1].concat(row);
  });
  return math.matrix(arr);
}


function reshapeTheta(theta){
  console.log(theta.length, theta[0].length);
  let a = [];
  theta.forEach(row => {
    row.forEach(item => {
      a.push([item]);
    })
  });
  return a;
}

module.exports = nnCostFunction;
