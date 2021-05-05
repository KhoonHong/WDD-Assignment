var i = 0;
var time = 5000;
var images = [];

images[0] = "url('img/SJ/Top5_destinations/Penang/img1(1).jpg')";
images[1] = "url('img/SJ/Top5_destinations/Penang/img1.jpg')";
images[2] = "url('img/SJ/Top5_destinations/Penang/img3.jpg')";
images[3] = "url('img/SJ/Top5_destinations/Penang/img4.jpg')";
images[4] = "url('img/SJ/Top5_destinations/Penang/img5.jpg')";
images[5] = "url('img/SJ/Top5_destinations/Penang/img6.jpg')";
images[6] = "url('img/SJ/Top5_destinations/Penang/img7.jpg')";
images[7] = "url('img/SJ/Top5_destinations/Penang/img8.jpg')";
images[8] = "url('img/SJ/Top5_destinations/Penang/img9.jpg')";
images[9] = "url('img/SJ/Top5_destinations/Penang/img10.jpg')";
images[10] = "url('img/SJ/Top5_destinations/Penang/img11.jpg')";
images[11] = "url('img/SJ/Top5_destinations/Penang/img12.jpg')";

 
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