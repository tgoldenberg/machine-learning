let y, X;

y =  new Array().fill(400).map(a => Math.floor(Math.random()*9))
X = new Array(400).fill(0).map(a => new Array(5000).fill(0).map(v => Math.random()))

let json = {
  X: X,
  y: y
}

var jsonfile = require('jsonfile');
var file = 'data.json';
jsonfile.writeFileSync(file, json);
