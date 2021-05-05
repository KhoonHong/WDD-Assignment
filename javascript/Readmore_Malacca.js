var i = 0;
var time = 5000;
var images = [];
 
images[0] = "url('img/SJ/Top5_destinations/Malacca/img1.jpg')";
images[1] = "url('img/SJ/Top5_destinations/Malacca/img2.jpg')";
images[2] = "url('img/SJ/Top5_destinations/Malacca/img3.jpg')";
images[3] = "url('img/SJ/Top5_destinations/Malacca/img4.jpg')";
images[4] = "url('img/SJ/Top5_destinations/Malacca/img4(2).jpg')";
images[5] = "url('img/SJ/Top5_destinations/Malacca/img5.jpg')";
images[6] = "url('img/SJ/Top5_destinations/Malacca/img6.jpg')";
images[7] = "url('img/SJ/Top5_destinations/Malacca/img7.jpg')";
images[8] = "url('img/SJ/Top5_destinations/Malacca/img8.jpg')";

 
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