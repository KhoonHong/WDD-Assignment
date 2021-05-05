var i = 0;
var time = 5000;
var images = [];
 
images[0] = "url('../img/background.jpg')";
images[1] = "url('../img/top5.jpg')";
images[2] = "url('../img/malaysiasceneII')";
images[3] = "url('../img/malaysiasceneIII')";
images[4] = "url('../img/malaysiasceneIV')";
images[5] = "url('../img/malaysiasceneV')";
images[6] = "url('../img/malaysiascene')";
 
function slideshow(){
    document.querySelector(".slideshow").style.backgroundImage = images[i];
 
    if(i < images.length - 1){
        i++;
    }else{
        i = 0;
    }
 
    setTimeout("slideshow()", time);

}
 
window.onload = slideshow;