window.addEventListener('DOMContentLoaded', () => {

    // Go-top button
    
    const goTopBtn = document.querySelector(".go-top");

    window.addEventListener("scroll", trackScroll);
    goTopBtn.addEventListener("click", goTop);

    function trackScroll() {

        const scrolled = window.pageYOffset;
        const coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            goTopBtn.classList.add("go-top--show");
        } else {
            goTopBtn.classList.remove("go-top--show");
        }
    }

    function goTop() {

        if (window.pageYOffset > 0) {
            window.scrollBy(0, -25);
            setTimeout(goTop, 0); 
        }
    }

    // Slider

    const slides = document.querySelectorAll('.slide-desktop');

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActivClasses();

            slide.classList.add('active');
        })
    }
    function clearActivClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }

    $('.carousel').carousel({
        interval: 3000
    })
});