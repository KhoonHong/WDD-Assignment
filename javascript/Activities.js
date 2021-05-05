var slide1 = false;
var slide2 = false;
var slide3 = false;
var slide4 = false;
var slide5 = false;
var slide6 = false;
var set = 2;

function nextslides(){
	if(set == 1) {
		document.querySelector("#slide1").style.display = "block";
		document.querySelector("#slide2").style.display = "block";
		document.querySelector("#slide3").style.display = "block";
		document.querySelector("#slide4").style.display = "none";
		document.querySelector("#slide5").style.display = "none";
		document.querySelector("#slide6").style.display = "none";
		
		document.querySelector("#slide1").style.order = "1";
		document.querySelector("#slide2").style.order = "2";
		document.querySelector("#slide3").style.order = "3";
		document.querySelector("#slide4").style.order = "4";
		document.querySelector("#slide5").style.order = "4";
		document.querySelector("#slide6").style.order = "4";
	}else if (set == 2){
		document.querySelector("#slide1").style.display = "none";
		document.querySelector("#slide2").style.display = "block";
		document.querySelector("#slide3").style.display = "block";
		document.querySelector("#slide4").style.display = "block";
		document.querySelector("#slide5").style.display = "none";
		document.querySelector("#slide6").style.display = "none";
		
		document.querySelector("#slide1").style.order = "4";
		document.querySelector("#slide2").style.order = "1";
		document.querySelector("#slide3").style.order = "2";
		document.querySelector("#slide4").style.order = "3";
		document.querySelector("#slide5").style.order = "4";
		document.querySelector("#slide6").style.order = "4";
	}else if (set == 3){
		document.querySelector("#slide1").style.display = "none";
		document.querySelector("#slide2").style.display = "none";
		document.querySelector("#slide3").style.display = "block";
		document.querySelector("#slide4").style.display = "block";
		document.querySelector("#slide5").style.display = "block";
		document.querySelector("#slide6").style.display = "none";
		
		document.querySelector("#slide1").style.order = "4";
		document.querySelector("#slide2").style.order = "4";
		document.querySelector("#slide3").style.order = "1";
		document.querySelector("#slide4").style.order = "2";
		document.querySelector("#slide5").style.order = "3";
		document.querySelector("#slide6").style.order = "4";
	}else if (set == 4){
		document.querySelector("#slide1").style.display = "none";
		document.querySelector("#slide2").style.display = "none";
		document.querySelector("#slide3").style.display = "none";
		document.querySelector("#slide4").style.display = "block";
		document.querySelector("#slide5").style.display = "block";
		document.querySelector("#slide6").style.display = "block";
		
		document.querySelector("#slide1").style.order = "4";
		document.querySelector("#slide2").style.order = "4";
		document.querySelector("#slide3").style.order = "4";
		document.querySelector("#slide4").style.order = "1";
		document.querySelector("#slide5").style.order = "2";
		document.querySelector("#slide6").style.order = "3";
	}else if (set == 5){
		document.querySelector("#slide1").style.display = "block";
		document.querySelector("#slide2").style.display = "none";
		document.querySelector("#slide3").style.display = "none";
		document.querySelector("#slide4").style.display = "none";
		document.querySelector("#slide5").style.display = "block";
		document.querySelector("#slide6").style.display = "block";
		
		document.querySelector("#slide1").style.order = "3";
		document.querySelector("#slide2").style.order = "4";
		document.querySelector("#slide3").style.order = "4";
		document.querySelector("#slide4").style.order = "4";
		document.querySelector("#slide5").style.order = "1";
		document.querySelector("#slide6").style.order = "2";
	}else if (set == 6){
		document.querySelector("#slide1").style.display = "block";
		document.querySelector("#slide2").style.display = "block";
		document.querySelector("#slide3").style.display = "none";
		document.querySelector("#slide4").style.display = "none";
		document.querySelector("#slide5").style.display = "none";
		document.querySelector("#slide6").style.display = "block";
		
		document.querySelector("#slide1").style.order = "2";
		document.querySelector("#slide2").style.order = "3";
		document.querySelector("#slide3").style.order = "4";
		document.querySelector("#slide4").style.order = "4";
		document.querySelector("#slide5").style.order = "4";
		document.querySelector("#slide6").style.order = "1";
	}
	
	if (set <= 5) {
		set++;
		
	}else{
		set = 1;
	}
}

function previousslides(){
	if (set == 2) {
		set = 6;
	}else if (set == 1) {
		set = 5;
	}else {
		set -= 2;
	}
	if(set == 1) {
		document.querySelector("#slide1").style.display = "block";
		document.querySelector("#slide2").style.display = "block";
		document.querySelector("#slide3").style.display = "block";
		document.querySelector("#slide4").style.display = "none";
		document.querySelector("#slide5").style.display = "none";
		document.querySelector("#slide6").style.display = "none";
		
		document.querySelector("#slide1").style.order = "1";
		document.querySelector("#slide2").style.order = "2";
		document.querySelector("#slide3").style.order = "3";
		document.querySelector("#slide4").style.order = "4";
		document.querySelector("#slide5").style.order = "4";
		document.querySelector("#slide6").style.order = "4";
	}else if (set == 2){
		document.querySelector("#slide1").style.display = "none";
		document.querySelector("#slide2").style.display = "block";
		document.querySelector("#slide3").style.display = "block";
		document.querySelector("#slide4").style.display = "block";
		document.querySelector("#slide5").style.display = "none";
		document.querySelector("#slide6").style.display = "none";
		
		document.querySelector("#slide1").style.order = "4";
		document.querySelector("#slide2").style.order = "1";
		document.querySelector("#slide3").style.order = "2";
		document.querySelector("#slide4").style.order = "3";
		document.querySelector("#slide5").style.order = "4";
		document.querySelector("#slide6").style.order = "4";
	}else if (set == 3){
		document.querySelector("#slide1").style.display = "none";
		document.querySelector("#slide2").style.display = "none";
		document.querySelector("#slide3").style.display = "block";
		document.querySelector("#slide4").style.display = "block";
		document.querySelector("#slide5").style.display = "block";
		document.querySelector("#slide6").style.display = "none";
		
		document.querySelector("#slide1").style.order = "4";
		document.querySelector("#slide2").style.order = "4";
		document.querySelector("#slide3").style.order = "1";
		document.querySelector("#slide4").style.order = "2";
		document.querySelector("#slide5").style.order = "3";
		document.querySelector("#slide6").style.order = "4";
	}else if (set == 4){
		document.querySelector("#slide1").style.display = "none";
		document.querySelector("#slide2").style.display = "none";
		document.querySelector("#slide3").style.display = "none";
		document.querySelector("#slide4").style.display = "block";
		document.querySelector("#slide5").style.display = "block";
		document.querySelector("#slide6").style.display = "block";
		
		document.querySelector("#slide1").style.order = "4";
		document.querySelector("#slide2").style.order = "4";
		document.querySelector("#slide3").style.order = "4";
		document.querySelector("#slide4").style.order = "1";
		document.querySelector("#slide5").style.order = "2";
		document.querySelector("#slide6").style.order = "3";
	}else if (set == 5){
		document.querySelector("#slide1").style.display = "block";
		document.querySelector("#slide2").style.display = "none";
		document.querySelector("#slide3").style.display = "none";
		document.querySelector("#slide4").style.display = "none";
		document.querySelector("#slide5").style.display = "block";
		document.querySelector("#slide6").style.display = "block";
		
		document.querySelector("#slide1").style.order = "3";
		document.querySelector("#slide2").style.order = "4";
		document.querySelector("#slide3").style.order = "4";
		document.querySelector("#slide4").style.order = "4";
		document.querySelector("#slide5").style.order = "1";
		document.querySelector("#slide6").style.order = "2";
	}else if (set == 6){
		document.querySelector("#slide1").style.display = "block";
		document.querySelector("#slide2").style.display = "block";
		document.querySelector("#slide3").style.display = "none";
		document.querySelector("#slide4").style.display = "none";
		document.querySelector("#slide5").style.display = "none";
		document.querySelector("#slide6").style.display = "block";
		
		document.querySelector("#slide1").style.order = "2";
		document.querySelector("#slide2").style.order = "3";
		document.querySelector("#slide3").style.order = "4";
		document.querySelector("#slide4").style.order = "4";
		document.querySelector("#slide5").style.order = "4";
		document.querySelector("#slide6").style.order = "1";
	}
	
	if (set <= 5) {
		set++;
		
	}else{
		set = 1;
	}
}
var content1=false;
var content2=false;
var content3=false;
var content4=false;
var content5=false;
var content6=false;

function showContent(i){
	if(i==1){
		if(content1==false){
			document.querySelector("#content1").style.display="block";
			content1=true;
		}
		else{
			document.querySelector("#content1").style.display="none";
			content1=false;
		}
	}
	else if(i==2){
		if(content2==false){
			document.querySelector("#content2").style.display="block";
			content2=true;
		}
		else{
			document.querySelector("#content2").style.display="none";
			content2=false;
		}
	}
	else if(i==3){
		if(content3==false){
			document.querySelector("#content3").style.display="block";
			content3=true;
		}
		else{
			document.querySelector("#content3").style.display="none";
			content3=false;
		}
	}
	else if(i==4){
		if(content4==false){
			document.querySelector("#content4").style.display="block";
			content4=true;
		}
		else{
			document.querySelector("#content4").style.display="none";
			content4=false;
		}
	}
	else if(i==5){
		if(content5==false){
			document.querySelector("#content5").style.display="block";
			content5=true;
		}
		else{
			document.querySelector("#content5").style.display="none";
			content5=false;
		}
	}
	else if(i==6){
		if(content6==false){
			document.querySelector("#content6").style.display="block";
			content6=true;
		}
		else{
			document.querySelector("#content6").style.display="none";
			content6=false;
		}
	}
}
