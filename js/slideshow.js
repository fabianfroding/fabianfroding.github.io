var slideIndex = 1;
var slideIndex2 = 1;
var slideIndex3 = 1;
var slideIndexDeig = 1;
showSlides(slideIndex);
showSlides2(slideIndex2);
showSlides3(slideIndex3);
showSlidesDeig(slideIndexDeig);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}
function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}
function plusSlidesDeig(n) {
    showSlidesDeig(slideIndexDeig += n);
}

// Thumbnail image controls (are these even used?)
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function currentSlide2(n) {
    showSlides2(slideIndex2 += n);
}
function currentSlide3(n) {
    showSlides3(slideIndex3 += n);
}
function currentSlideDeig(n) {
    showSlidesDeig(slideIndexDeig += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    if (n > slides.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex2 - 1].style.display = "block";
}
function showSlides3(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides3");
    if (n > slides.length) { slideIndex3 = 1 }
    if (n < 1) { slideIndex3 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex3 - 1].style.display = "block";
}
function showSlidesDeig(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesDeig");
    if (n > slides.length) { slideIndexDeig = 1 }
    if (n < 1) { slideIndexDeig = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexDeig - 1].style.display = "block";
}
