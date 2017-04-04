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
  this.style.color = "blue";
}
