function popitup(url) {
    newwindow=window.open(url,'name','height=400,width=400');
    if (window.focus) {newwindow.focus()}
    return false;
}

document.addEventListener("DOMContentLoaded", myFunction);

const newLocal = "block";
function myFunction() {

    const nextSlider = document.getElementsByClassName("next"); // Next Action
    
    let slideIndex = 0;
    showSlides();
    /*let slideIndex=1;
    let k;
    showSlides(slideIndex);

    function showSlides(n){
        let h;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {slideIndex = 1} 
        if (n < 1) {slideIndex = slides.length}
        for (h = 0; h < slides.length; h++) {
            slides[h].style.display = "none"; 
        }
        slides[slideIndex-1].style.display="block";
    }*/

    function showSlides() {
        let ss;
        let slides = document.getElementsByClassName("mySlides");
        for (ss = 0; ss < slides.length; ss++) {
            slides[ss].style.display = "none"; 
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1} 
        slides[slideIndex-1].style.display = "block"; 
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

    for (k=0; k < nextSlider.length; k++) {
        nextSlider[k].addEventListener("click", function plusSlides(ji=1) {
            showSlides(slideIndex += ji);
        }); 
    }

    const coll = document.getElementsByClassName("collapsible");
    let i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function(){
            this.classList.toggle("active"); //CSS
            let content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }

    const coll2 = document.getElementsByClassName("collapsible2");
    let j;

    for (j = 0; j < coll2.length; j++) {
        coll2[j].addEventListener("click", function(){
            this.classList.toggle("active2"); //CSS
            let content2 = this.nextElementSibling;
            if (content2.style.display === "block") {
                content2.style.display = "none";
            } else {
                content2.style.display = "block";
            }
        });
    }
}