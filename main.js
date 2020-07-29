var x = 0;
var textEff = "DESIGNER | DEVELOPER";
var container = document.getElementById('typeEffect');

function animate(){
  if(x< textEff.length){
    container.innerHTML += textEff.charAt(x);
    x++;
    setTimeout(animate, 80);
  }
}

animate();