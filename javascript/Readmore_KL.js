var i = 0;
var time = 5000;
var images = [];
 
images[0] = "url('img/SJ/Top5_destinations/KL/img2.jpg')";
images[1] = "url('img/SJ/Top5_destinations/KL/img4.jpg')";
images[2] = "url('img/SJ/Top5_destinations/KL/img5.jpg')";
images[3] = "url('img/SJ/Top5_destinations/KL/img3.jpg')";
images[4] = "url('img/SJ/Top5_destinations/KL/img7.jpg')";
images[5] = "url('img/SJ/Top5_destinations/KL/img8.jpg')";
images[6] = "url('img/SJ/Top5_destinations/KL/img12.jpg')";
images[7] = "url('img/SJ/Top5_destinations/KL/image12.jpg')";
images[8] = "url('img/SJ/Top5_destinations/KL/image13.jpg')";

 
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