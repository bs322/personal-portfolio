console.log("JS Connected");
document.addEventListener("DOMContentLoaded", function () {

    // ===== Typing Effect =====
    const textArray = ["Web Developer", "Frontend Developer", "Python Learner"];
    let index = 0;
    let charIndex = 0;
    const typingElement = document.querySelector(".typing");

    function typeEffect() {
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
            index++;
            if (index >= textArray.length) index = 0;
            setTimeout(typeEffect, 300);
        }
    }

    if (typingElement) {
        typeEffect();
    }

    // ===== Theme Toggle =====
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

    // ===== Scroll Progress Bar =====
    window.addEventListener("scroll", function(){
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        document.getElementById("progressBar").style.width = scrollPercent + "%";
    });

});
