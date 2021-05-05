var array = [];
var i =- 1;

array[0] = "url('img/portfolio/pic1.jpg')";
array[1] = "url('img/portfolio/pic2.jpg')";
array[2] = "url('img/portfolio/pic3.jpg')";
array[3] = "url('img/portfolio/pic4.jpg')";
array[4] = "url('img/portfolio/pic5.jpg')";
array[5] = "url('img/portfolio/pic6.jpg')";
array[6] = "url('img/portfolio/pic7.jpg')";
array[7] = "url('img/portfolio/pic8.jpg')";
array[8] = "url('img/portfolio/pic9.jpg')";
array[9] = "url('img/portfolio/pic10.jpg')";
array[10] = "url('img/portfolio/pic11.jpg')";
array[11] = "url('img/portfolio/pic12.jpg')";
array[12] = "url('img/portfolio/pic13.jpg')";
array[13] = "url('img/portfolio/pic14.jpg')";
array[14] = "url('img/portfolio/pic15.jpg')";
array[15] = "url('img/portfolio/pic16.jpg')";
array[16] = "url('img/portfolio/pic17.jpg')";


function slideshow(){
  i = (i + 1) % 17;
  document.querySelector(".slideshow").style.backgroundImage = array[i];
}

function back(){
  i = (i - 1) % 17;
  if (i == -1){
    i = 16;
  }
  document.querySelector(".slideshow").style.backgroundImage = array[i];
}

function front(){
  i = (i + 1) % 17;
  document.querySelector(".slideshow").style.backgroundImage = array[i];
}

window.setInterval("slideshow();", 5000);
window.onload = slideshow;