(function(){

console.log('JS IS LINKED');
// document.getElementById("tshirts").onclick = function() {displayTee()};

displayAll = () => {
  var arrOfElements = document.querySelectorAll('.tee, .hoodie, .hat');
  var arrLen = arrOfElements.length;

  for (var i = 0; i < arrLen; i++){
      arrOfElements[i].style.display = 'block';
  }
}

displayTee = () => {
  var tees = document.querySelectorAll('.tee');
  var teesLen = tees.length;
  for (var i = 0; i < teesLen; i++){
      tees[i].style.display = 'block';
  }

  var arrOfElements = document.querySelectorAll(".hoodie, .hat");
  var arrLen = arrOfElements.length;

  for (var i = 0; i < arrLen; i++){
      arrOfElements[i].style.display = 'none';
  }
}

displayHoodie = () => {
  var hoodies = document.querySelectorAll('.hoodie');
  var hoodieLen = hoodies.length;
  for (var i = 0; i < hoodieLen; i++){
      hoodies[i].style.display = 'block';
  }

  var arrOfElements=document.querySelectorAll(".tee, .hat");
  var arrLen = arrOfElements.length;

  for (var i = 0; i < arrLen; i++){
      arrOfElements[i].style.display = 'none';
  }
}

displayHat = () => {
  var hats = document.querySelectorAll('.hat');
  var hatLen = hats.length;
  for (var i = 0; i < hatLen; i++){
      hats[i].style.display = 'block';
  }

  var arrOfElements = document.querySelectorAll(".tee, .hoodie");
  var arrLen = arrOfElements.length;

  for (var i = 0; i < arrLen; i++){
      arrOfElements[i].style.display='none';
  }
}

})();
