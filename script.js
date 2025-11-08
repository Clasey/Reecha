let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 3000); // change every 3 seconds
}


// Optional: Add next/prev functionality
function plusSlides(n) {
    slideIndex += n - 1;
    showSlides();
}
