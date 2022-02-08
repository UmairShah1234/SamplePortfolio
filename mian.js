var navbar = document.getElementById("navbar");
window.onscroll = function () {
    if (window.pageYOffset > 0) {
        navbar.style.boxShadow = "0px 0px 10px";
    }
    else if (window.pageYOffset == 0) {
        navbar.style.boxShadow = "0px 0px 0px";
    }
}

var btn = document.getElementById("btn");
function changeColor() {
    
    if (document.getElementById("btn").value =="light"){
        // navbar
        document.getElementById("navbar").style.backgroundColor = "white";
        document.getElementById("btn").innerHTML = "dark";
        document.getElementById("btn").value = "dark";
        // section2
        document.getElementById("c2").style.backgroundColor = "white";

        // section1
        document.getElementById("c1").style.backgroundImage =  "url(images/image3.jpg)";
        //section3
        document.getElementById("c3").style.backgroundColor = "white";


    }else if(document.getElementById("btn").value =="dark"){
        //navbar
        document.getElementById("navbar").style.backgroundColor = "grey";
        document.getElementById("btn").innerHTML = "light";
        document.getElementById("btn").value = "light";
        // section2
        document.getElementById("c2").style.backgroundColor = "grey";
        // section1
        document.getElementById("c1").style.backgroundImage =  "url(images/image2.jpg)";
        //section3
        document.getElementById("c3").style.backgroundColor = "grey";
        
    }
}

//carousel for skills
var slideIndex = 1;
slideShow(slideIndex);

//previous and next button
function plusSlide(n){
    slideShow(slideIndex += n);
}

function slideShow(n){
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length){
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slides.length;
    }
    for (var i = 0 ; i < slides.length ; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";  
}

// contact SubmitEvent
function sendMsg(){
    var input1 = document.getElementById("id1").value;
    var input2 = document.getElementById("id2").value;
    var input3 = document.getElementById("id3").value;
    if (input1 =="" || input2 =="" || input3 == ""){
        alert("write something")
    }else{
        alert("We not connected to backend ! sorry");
    }
}

//about me
const aboutBtn = document.getElementById("about");
function aboutme(){
    window.scrollTo(0,650);
}
