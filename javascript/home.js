var i = 0;
var time = 5000;
var images = [];

images[0] = "url('img/home/slideshow1.png')";
images[1] = "url('img/home/slideshow2.png')";
images[2] = "url('img/home/slideshow3.png')";

function slideshow(){
    document.querySelector("#slideshow").style.backgroundImage = images[i];

    if(i < images.length - 1){
        i++;
    }else{
        i = 0;
    }

    setTimeout("slideshow()", time);
}
function ssBack(){
    if(i == 0){
        document.querySelector("#slideshow").style.backgroundImage = images[images.length - 2];
        i = images.length - 1;
    }else if (i == 1){
        document.querySelector("#slideshow").style.backgroundImage = images[images.length - 1];
        i --;
    }
    else
    {
        document.querySelector("#slideshow").style.backgroundImage = images[i - 2];
        i--;
    }
}

function ssForward(){
    document.querySelector("#slideshow").style.backgroundImage = images[i];

    if(i < images.length - 1){
        i++;
    }else{
        i = 0;
    }

}

window.onload = slideshow;
