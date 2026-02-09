// Scroll Reveal
document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(".animate");

    function revealOnScroll() {
        const trigger = window.innerHeight * 0.85;

        elements.forEach(el => {
            const top = el.getBoundingClientRect().top;

            if (top < trigger) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    
    window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    if(header){
        header.classList.toggle("sticky", window.scrollY > 50);
    }
});


    // More About Toggle
    const btn = document.getElementById("moreBtn");
    const content = document.getElementById("moreContent");

    if (btn && content) {
        btn.addEventListener("click", function () {
            content.classList.toggle("hidden");

            if (content.classList.contains("hidden")) {
                btn.innerText = "More About Me";
            } else {
                btn.innerText = "Hide About Me";
            }
        });
    }

});
