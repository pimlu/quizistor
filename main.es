'use strict';

(() => {

//exact band colors DigiKey uses
let colors = '000 663332 fe0000 ff6600 ffff01 3c3 '+
  '6766ff cd66ff 939393 fff cb9a34 ccc';
colors = colors.split(' ').map(s => '#'+s);

let resistor, resEl, ansEl;

$(() => {
  resEl = $('#resistor'); ansEl = $('#answer');
  redo();
  
  let keyEvts = {
    'A': redo,
    'S': show
  };
  
  $(document).keydown(e => {
    for(let key in keyEvts) {
      if(e.keyCode === key.charCodeAt()) keyEvts[key]();
    }
  })
});

function redo() {
  let randCol = () => Math.random()*10 |0;
  let randMul = () => Math.random()*12 |0;
  let randTol = () => [1,2,5,6,7,8,10,11][Math.random()*8 |0];
  let addBand = c => {
    resistor.push(c)
    resEl.append($(`<div style="background:${colors[c]};">`));
  }
  resistor = [];
  resEl.empty(); ansEl.empty();
  
  addBand(randCol());
  addBand(randCol());
  addBand(randMul());
  addBand(randTol());
}
function show() {
  let r=resistor;
  //our set of prefixes
  let prefs = 'R k M G'.split(' ');
  prefs[-1] = 'm';
  //our irregular set of tolerances
  let tols = [,1,2,,,0.5,0.25,0.1,0.05,,5,10];
  let coef = r[0]*10 + r[1]; //concatenate the digits
  let mul = r[2];
  if(r[2] >= 10) { //edge case for when power of 10 is negative
    coef *= Math.pow(10, 9-r[2]+3); //convers to millis
    mul = 9-r[2];
  } else {
    coef = coef*Math.pow(10,(mul+3)%3); //handles in betweens of metric prefixes
  }
  
  if(coef>1e3) { //power of 10 overflow
    coef /= 1e3;
    mul += 3;
  }
  //simple string formatting
  let out = ''+coef;
  if(out.indexOf('.') === -1) out += '.';
  out = out.replace('.', prefs[Math.floor(mul/3)]); //grab the right metric prefix
  out += ` &plusmn;${tols[r[3]]}%`;
  $('#answer').html(out);
}

})();