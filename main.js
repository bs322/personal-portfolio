// Scroll Reveal
document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(".animate");

    function revealOnScroll() 
    // Active Navbar on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});
    {
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

// ===== Typing Effect =====

const textArray = ["Web Developer", "Frontend Developer", "Python Learner"];
let index = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function typeEffect() {
    if (!typingElement) return;

    if (charIndex < textArray[index].length) {
        typingElement.textContent += textArray[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        index = (index + 1) % textArray.length;
        setTimeout(typeEffect, 300);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);
// Theme Toggle
const toggleBtn = document.getElementById("themeToggle");

if(toggleBtn){
    toggleBtn.addEventListener("click", function(){
        document.body.classList.toggle("light-mode");

        if(document.body.classList.contains("light-mode")){
            toggleBtn.innerText = "☀️";
        } else {
            toggleBtn.innerText = "🌙";
        }
    });
}
