var i = 0;
var time = 5000;
var images = [];
 
images[0] = "url('img/SJ/Top5_destinations/Langkawi/img1.jpg')";
images[1] = "url('img/SJ/Top5_destinations/Langkawi/img2.jpg')";
images[2] = "url('img/SJ/Top5_destinations/Langkawi/img3.jpg')";
images[3] = "url('img/SJ/Top5_destinations/Langkawi/img4.jpg')";
images[4] = "url('img/SJ/Top5_destinations/Langkawi/img5.jpg')";
images[5] = "url('img/SJ/Top5_destinations/Langkawi/img6.jpg')";
images[6] = "url('img/SJ/Top5_destinations/Langkawi/img7.jpg')";
images[7] = "url('img/SJ/Top5_destinations/Langkawi/img8.jpg')";
images[8] = "url('img/SJ/Top5_destinations/Langkawi/img9.jpg')";
images[9] = "url('img/SJ/Top5_destinations/Langkawi/img10.jpg')";
images[10] = "url('img/SJ/Top5_destinations/Langkawi/img11.jpg')";
images[11] = "url('img/SJ/Top5_destinations/Langkawi/img12.jpg')";
images[12] = "url('img/SJ/Top5_destinations/Langkawi/img13.jpg')";

 
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