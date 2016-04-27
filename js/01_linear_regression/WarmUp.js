'use strict';
let eye = (N) => {
  let a = new Array(N).fill(0).map(() => new Array(N).fill(0));
  for (let i=0; i<N; i++){
    a[i][i] = 1;
  }
  return a;
};

let WarmUp = (N) => {
  console.log(eye(N));
};

module.exports = WarmUp;
