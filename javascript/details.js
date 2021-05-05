function showHotel(){
    document.querySelector(".hotel").style.display = "block";
    document.querySelector(".flight").style.display = "none";
    document.querySelector(".schedule").style.display = "none";
    
    fadeIn(document.querySelector(".hotel"), 200);
    document.querySelector(".flight").style.opacity = "0";
    document.querySelector(".schedule").style.opacity = "0";

}

function showFlight(){
    document.querySelector(".hotel").style.display = "none";
    document.querySelector(".flight").style.display = "block";
    document.querySelector(".schedule").style.display = "none";
    document.querySelector(".hotel").style.opacity = "0";
    fadeIn(document.querySelector(".flight"), 200);
    document.querySelector(".schedule").style.opacity = "0";
}

function showSchedule(){
    document.querySelector(".hotel").style.display = "none";
    document.querySelector(".flight").style.display = "none";
    document.querySelector(".schedule").style.display = "block";
    document.querySelector(".hotel").style.opacity = "0";
    document.querySelector(".flight").style.opacity = "0";
    fadeIn(document.querySelector(".schedule"), 200);
}