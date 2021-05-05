var price;
var deposit;

function detailsSubmit(){
    form = document.getElementById("userDetails");
    name = form.elements[0].value;
    tel = form.elements[1].value;
    start = new Date(form.elements[2].value);
    end = new Date(form.elements[3].value);
    packages = form.elements[4].value;

    if(name.length == 0){
        alert("You are required to enter your name");
        return;
    }else if (tel.length == 0){
        alert("You are required to enter your telephone number.");
        return;
    }else if (start.length == 0){
        alert("You are required to choose the start date!");
        return;
    }else if (end.length == 0){
        alert("You are required to choose the end date!");
        return;
    }
    sDay = start.getDate();
    sMonth = start.getMonth() + 1;
    sYear = start.getFullYear();

    eDay = end.getDate();
    eMonth = end.getMonth() + 1;
    eYear = end.getFullYear();

    today = new Date();
    day = today.getDate();
    month = today.getMonth() +1;
    year = today.getFullYear();

    if(eYear < sYear){
        alert("Invalid date");
        return;
    }else if (eYear == sYear){
        if (eMonth < sMonth){
            alert("Invalid date");
            return;
        }else if(eDay < sDay){
            if(eMonth == sMonth){
                alert("Invalid date");
                return;
            }
        }
    }

    if(sYear < year){
        alert("invalid Date");
        return;
    }else if (sYear == year) {
        if(sMonth < month) {
            alert("Invalid Date");
            return;
        }else if (sMonth == month){
            if(sDay < day){
                alert("Invalid Date");
                return;
            }
        }
    }

    document.getElementById("name").innerHTML = "Mr./Ms. " + name;
    document.getElementById("telno").innerHTML = tel;
    if (packages == "p1" || packages == "d11"){
        document.getElementById("package").innerHTML = "Kuala Lumpur" + " ( " + sDay + "/" + sMonth + "/" + sYear + " ~ " + eDay + "/" + eMonth + "/" + eYear + " ) ";
        price = 4888;
        deposit = 500;
    }else if(packages == "p2" || packages == "d5"){
        document.getElementById("package").innerHTML = "Penang" + " ( " + sDay + "/" + sMonth + "/" + sYear + " ~ " + eDay + "/" + eMonth + "/" + eYear + " ) ";
        price = 3888;
        deposit = 500;
    }else if (packages == "p3" || packages == "d14"){
        document.getElementById("package").innerHTML = "Malacca" + " ( " + sDay + "/" + sMonth + "/" + sYear + " ~ " + eDay + "/" + eMonth + "/" + eYear + " ) ";
        price = 3888;
        deposit = 500;
    }else if (packages == "i1"){
        document.getElementById("package").innerHTML = "Seoul" + " ( " + sDay + "/" + sMonth + "/" + sYear + " ~ " + eDay + "/" + eMonth + "/" + eYear + " ) ";
        price = 13888;
        deposit = 1888;
    }else if (packages == "i2"){
        document.getElementById("package").innerHTML = "Tokyo" + " ( " + sDay + "/" + sMonth + "/" + sYear + " ~ " + eDay + "/" + eMonth + "/" + eYear + " ) ";
        price = 13888;
        deposit = 1888;
    }else if (packages == "d1"){
        document.getElementById("package").innerHTML = "Sabah" + " ( " + sDay + "/" + sMonth + "/" + sYear + " ~ " + eDay + "/" + eMonth + "/" + eYear + " ) ";
        price = 4888;
        deposit = 500;
    }else if (packages == "d2"){
        document.getElementById("package").innerHTML = "Sarawak" + " ( " + sDay + "/" + sMonth + "/" + sYear + " ~ " + eDay + "/" + eMonth + "/" + eYear + " ) ";
        price = 4888;
        deposit = 500;
    }else if (packages == "d3"){
        document.getElementById("package").innerHTML = "Perlis" + " ( " + sDay + "/" + sMonth + "/" + sYear + " ~ " + eDay + "/" + eMonth + "/" + eYear + " ) ";
        price = 4888;
        deposit = 500;
    }else if (packages == "d4"){
        document.getElementById("package").innerHTML = "Kedah" + " ( " + sDay + "/" + sMonth + "/" + sYear + " ~ " + eDay + "/" + eMonth + "/" + eYear + " ) ";
        price = 4888;
        deposit = 500;
    }else if (packages == "d6"){
        document.getElementById("package").innerHTML = "Perak" + " ( " + sDay + "/" + sMonth + "/" + sYear + " ~ " + eDay + "/" + eMonth + "/" + eYear  + " ) ";
        price = 4888;
        deposit = 500;
    }else if (packages == "d7"){
        document.getElementById("package").innerHTML = "Kelantan" + " ( " + sDay + "/" + sMonth + "/" + sYear + " ~ " + eDay + "/" + eMonth + "/" + eYear  + " ) ";
        price = 4888;
        deposit = 500;
    }else if (packages == "d8"){
        document.getElementById("package").innerHTML = "Terengganu" + " ( " + sDay + "/" + sMonth + "/" + sYear + " ~ " + eDay + "/" + eMonth + "/" + eYear  + " ) ";
        price = 4888;
        deposit = 500;
    }else if (packages == "d9"){
        document.getElementById("package").innerHTML = "Pahang" + " ( " + sDay + "/" + sMonth + "/" + sYear + " ~ " + eDay + "/" + eMonth + "/" + eYear  + " ) ";
        price = 4888;
        deposit = 500;
    }else if (packages == "d10"){
        document.getElementById("package").innerHTML = "Selangor" + " ( " + sDay + "/" + sMonth + "/" + sYear + " ~ " + eDay + "/" + eMonth + "/" + eYear  + " ) ";
        price = 4888;
        deposit = 500;
    }else if (packages == "d12"){
        document.getElementById("package").innerHTML = "Putra Jaya" + " ( " + sDay + "/" + sMonth + "/" + sYear + " ~ " + eDay + "/" + eMonth + "/" + eYear  + " ) ";
        price = 4888;
        deposit = 500;
    }else if (packages == "d13"){
        document.getElementById("package").innerHTML = "Negeri Sembilan" + " ( " + sDay + "/" + sMonth + "/" + sYear + " ~ " + eDay + "/" + eMonth + "/" + eYear  + " ) ";
        price = 4888;
        deposit = 500;
    }else if (packages == "d15"){
        document.getElementById("package").innerHTML = "Johor" + " ( " + sDay + "/" + sMonth + "/" + sYear + " ~ " + eDay + "/" + eMonth + "/" + eYear  + " ) ";
        price = 4888;
        deposit = 500;
    }

    document.getElementById("price").innerHTML = "RM" + price + ".00 ( Deposit: RM " + deposit + ".00 ) ";

    document.querySelector(".fillcontainer").style.display = "none";

    document.querySelector(".confirmation").style.display = "block";

    
    fadeIn(document.querySelector(".customer"), 500);

    document.getElementById("total").innerHTML = "RM " + price + ".00";

    document.getElementById("deposit").innerHTML = "RM " + deposit + ".00";
    
    document.querySelector("#amounts").innerHTML = "RM " + deposit + ".00";
    
    document.querySelector(".customer").style.display = "block";

    setTimeout("fadeIn(document.querySelector('.confirmation'), 500);", 500);
}

function pay(){
    document.querySelector(".confirmation").style.display = "none";

    document.querySelector(".payment").style.display = "block";
    fadeIn(document.querySelector(".payment"), 500);
}

function sucess(){
    document.querySelector(".payment").style.display = "none";
    document.querySelector(".success").style.display = "block";
    fadeIn(document.querySelector(".success"), 500);

    rfid = Math.floor(Math.random() * 1000000);

    document.querySelector("#rfid").innerHTML = "#2020" + rfid.toString();
}