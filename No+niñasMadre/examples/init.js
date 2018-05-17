/*funcion inicializa el juego
funcion inicia(){
  document.getElementById("cambiaImagen").innerHTML
  = "<img onclick='cambia()' src='gallina-icon.png'"
  " style='position:absolute;top:100px; left:300px;' />";
  funcion inicia(){
    document.getElementById("cambiaImagen").innerHTML
    = "<img onclick='cambia()' src='dead.png'"
    " style='position:absolute;top:100px; left:300px;' />";
}*/
//variables globales
var top1 = 0;
var left1 = 0;
var contador = 0;
var contadorGallinas = 0;
function inicia(){
  top1 = Math.round(Math.random() *200);
  left1 = Math.round(Math.random() *550);
  document.getElementById("cambiaImagen").innerHTML
  = "<img onclick='cambia()' src='gallina-icon.png' style='position:absolute;top: "+ top1 +"px; left:"+ left1 + "px;' />";
  contadorGallinas += 1;
  document.getElementById("vivas").innerHTML = contadorGallinas;
  }
function cambia(){
  document.getElementById("cambiaImagen").innerHTML
  = "<img src='dead.png' style='position:absolute;top: "+ top1 +"px; left:"+ left1 + "px;' />";
  contador += 1;
  document.getElementById("puntaje").innerHTML = contador;
}
function mueveImagen(){
  //cada 100ms ejecutara la funcion inicia
  setInterval( inicia, 1000);
}
