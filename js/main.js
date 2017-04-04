var numeros = document.getElementsByClassName("numero");
for(i = 0; i < numeros.length; i++){
  numeros[i].addEventListener("click", num);
}

function num(){
 this.innerHTML = this.value;
}

var color = document.getElementsByClassName("color");
for(i = 0; i < color.length; i++){
  color[i].addEventListener("click", colour);
}

function colour(){
  this.style.backgroundColor = "#CC33FF";
}

var bomba = document.getElementsByClassName("bomba");
for(i = 0; i < bomba.length; i++){
  bomba[i].addEventListener("click", kaboom);
}

function kaboom(){
  var imgBomba = document.createElement("img");
  imgBomba.src = "img/explosion.png"
  imgBomba.style = "width:20px"
  this.appendChild(imgBomba);
  gameOver();
}

function gameOver(){
  alert("KABOOOOOOOOOM!");
  perdiste();
}

function perdiste(){
  var botones = document.getElementsByTagName("button");
  for(i =0; i < botones.length; i++){
    botones[i].disabled = true;
  }
}
