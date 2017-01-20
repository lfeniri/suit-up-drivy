/*global Mustache */
'use strict';

var DRIVY = DRIVY || {};

(function starter () {
  var render = function render (actors) {
    var template = document.querySelector('#template').innerHTML;

    Mustache.parse(template);   // optional, speeds up future uses

    var rendered = Mustache.render(template, {'actors': actors});

    document.querySelector('#actors').innerHTML = rendered;
  };

  var button = document.querySelector('#compute');

  button.addEventListener('click', function onClick () {
    var car = DRIVY.getCar();
    var begin = document.querySelector('.begin').value;
    var end = document.querySelector('.end').value;
    var distance = document.querySelector('.distance').value;
    var option = document.querySelector('.option').checked;
    console.log(option);
    var actors = DRIVY.payActors(car, begin, end, distance, option);

    $("#rental").hide(1000,function(){
    $("#actors").show(1000);});

    render(actors);

    return;
  });
}());

function step1(){
  $("#car").hide(1000,function(){
  $("#rental").show(1000);
});
}
