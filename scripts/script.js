// Image slider functionality
// When the user clicks the next or previous buttons, show the next/previous article
const imageSlider = (() => {
    const nextBtn = document.querySelector(".next");
    const previousBtn = document.querySelector(".previous");
    const slides = document.querySelectorAll(".slide");
    const navDots = document.querySelectorAll(".dot");

    let slideIdx = 0;

    // Increment / decrement slide
    const nextSlide = (increment) => {
        showSlide(slideIdx += increment);
    } 

    // Slide nav dot slide selection
    const selectSlide = (idx) => {
        showSlide(slideIdx = idx);
    }

    // Display the slide article
    const showSlide = (idx) => {
        if (idx > slides.length) {slideIdx = 1};
        if (idx < 1) {slideIdx = slides.length};
        
        slides.forEach(slide => {
            slide.style.display = "none";
        })
        navDots.forEach(dot => {
            dot.classList.remove("active-dot");
        })


        slides[slideIdx - 1].style.display = "block";
        navDots[slideIdx - 1].classList.add("active-dot");
    }

    // Automatically cycle through slide articles
    const autoShowSlides = () => {
        slides.forEach(slide => {
            slide.style.display = "none";
        })
        navDots.forEach(dot => {
            dot.classList.remove("active-dot");
        })

        slideIdx++;
        if (slideIdx > slides.length) {slideIdx = 1};

        slides[slideIdx - 1].style.display = "block";
        navDots[slideIdx - 1].classList.add("active-dot");
        setTimeout(autoShowSlides, 10000);
    }

    nextBtn.addEventListener("click", () => nextSlide(1));
    previousBtn.addEventListener("click", () => nextSlide(-1));
    navDots.forEach((dot, idx) => {
        dot.addEventListener("click", () => selectSlide(idx+1));
    })

    
    showSlide(slideIdx);
    autoShowSlides();
})();
