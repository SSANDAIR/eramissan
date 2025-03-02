// Плавное появление секций
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    function checkSections() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkSections);
    checkSections();
});

// Плавный скроллинг
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Музыкальный плеер
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");

let isPlaying = false;

// Автоматическое воспроизведение
window.addEventListener("load", () => {
    audio.play().catch(() => {
        console.log("Автоиграние заблокировано браузером.");
    });
});

// Переключение музыки
playPauseBtn.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = "▶";
    } else {
        audio.play();
        playPauseBtn.textContent = "⏸";
    }
    isPlaying = !isPlaying;
});
