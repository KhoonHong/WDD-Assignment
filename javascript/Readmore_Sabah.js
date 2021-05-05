var i = 0;
var time = 5000;
var images = [];
 
images[0] = "url('img/SJ/Top5_destinations/Sabah/img1(3).jpg')";
images[1] = "url('img/SJ/Top5_destinations/Sabah/img1(1).jpg')";
images[2] = "url('img/SJ/Top5_destinations/Sabah/img1.jpg')";
images[3] = "url('img/SJ/Top5_destinations/Sabah/img5.jpg')";
images[4] = "url('img/SJ/Top5_destinations/Sabah/img6.jpg')";
images[5] = "url('img/SJ/Top5_destinations/Sabah/img8.jpg')";
images[6] = "url('img/SJ/Top5_destinations/Sabah/img9.jpg')";
images[7] = "url('img/SJ/Top5_destinations/Sabah/img10(1).jpg')";
images[8] = "url('img/SJ/Top5_destinations/Sabah/img10.jpg')";
images[9] = "url('img/SJ/Top5_destinations/Sabah/img11.jpg')";
images[10] = "url('img/SJ/Top5_destinations/Sabah/img12.jpg')";
images[11] = "url('img/SJ/Top5_destinations/Sabah/img13.jpg')";
images[12] = "url('img/SJ/Top5_destinations/Sabah/img14.jpg')";

 
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