var A = false;
var B = false;
var C = false;
var D = false;

function show(value){
    if (A == false && B == false && C == false && D == false){
        if (value == 1){
            document.querySelector("#Insurance").style.display = "block";
            document.querySelector("#Visa").style.display = "none";
            document.querySelector("#Hotel").style.display = "none";
            document.querySelector("#Ticketing").style.display = "none";
        }else if (value == 2) {
            document.querySelector("#Insurance").style.display = "none";
            document.querySelector("#Visa").style.display = "block";
            document.querySelector("#Hotel").style.display = "none";
            document.querySelector("#Ticketing").style.display = "none";
        }else if (value == 3) {
            document.querySelector("#Insurance").style.display = "none";
            document.querySelector("#Visa").style.display = "none";
            document.querySelector("#Hotel").style.display = "block";
            document.querySelector("#Ticketing").style.display = "none";
        }else if (value == 4) {
            document.querySelector("#Insurance").style.display = "none";
            document.querySelector("#Visa").style.display = "none";
            document.querySelector("#Hotel").style.display = "none";
            document.querySelector("#Ticketing").style.display = "block";
        }
    }else{
        return;
    }
}

function remove(value){
    if (value == 1) {
        if (A == true){
            return;
        }else{
            document.querySelector("#Insurance").style.display = "none";
        }
    } else if (value == 2) {
        if (B == true){
            return;
        }else{
            document.querySelector("#Visa").style.display = "none";
        }
    } else if (value == 3) {
        if (C == true){
            return;
        }else{
            document.querySelector("#Hotel").style.display = "none";
        }
    } else if (value == 4) {
        if (D == true){
            return;
        }else{
            document.querySelector("#Ticketing").style.display = "none";
        }
    }
}

function fix(value){
    if (value == 1) {
        document.querySelector("#Insurance").style.display = "block";
        document.querySelector("#Visa").style.display = "none";
        document.querySelector("#Hotel").style.display = "none";
        document.querySelector("#Ticketing").style.display = "none";

        A = true;
        B = false;
        C = false;
        D = false;
    } else if (value == 2) {
        document.querySelector("#Insurance").style.display = "none";
        document.querySelector("#Visa").style.display = "block";
        document.querySelector("#Hotel").style.display = "none";
        document.querySelector("#Ticketing").style.display = "none";

        A = false;
        B = true;
        C = false;
        D = false;
    } else if (value == 3) {
        document.querySelector("#Insurance").style.display = "none";
        document.querySelector("#Visa").style.display = "none";
        document.querySelector("#Hotel").style.display = "block";
        document.querySelector("#Ticketing").style.display = "none";

        A = false;
        B = false;
        C = true;
        D = false;
    } else if (value == 4) {
        document.querySelector("#Insurance").style.display = "none";
        document.querySelector("#Visa").style.display = "none";
        document.querySelector("#Hotel").style.display = "none";
        document.querySelector("#Ticketing").style.display = "block";

        A = false;
        B = false;
        C = false;
        D = true;
    }
}
