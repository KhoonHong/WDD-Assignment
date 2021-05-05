var i = 0;
var time = 5000;
var images = [];

images[0] = "url('img/Penang/penang1.jpg')";
images[1] = "url('img/Penang/penang2.jpg')";
images[2] = "url('img/Penang/penang3.jpg')";
images[3] = "url('img/Penang/penang4.jpg')";

function slideshow(){
    document.querySelector("#slide1").style.backgroundImage=images[i];

    if(i < images.length - 1){
        i++;
    }else{
        i = 0;
    }

    setTimeout("slideshow()", time);
}

function ssBack(){
    if(i == 0){
        document.querySelector("#slide1").style.backgroundImage = images[images.length - 2];
        i = images.length - 1;
    }else if (i == 1){
        document.querySelector("#slide1").style.backgroundImage = images[images.length - 1];
        i--;
    }
    else
    {
        document.querySelector("#slide1").style.backgroundImage = images[i - 2];
        i--;
    }
}

function ssForward(){
    document.querySelector("#slide1").style.backgroundImage = images[i];

    if(i < images.length - 1){
        i++;
    }else{
        i = 0;
    }

}

window.onload = slideshow;