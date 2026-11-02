
"use strict";

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

// Mobile navigation
menuToggle.addEventListener("click", function () {
    navigation.classList.toggle("active");

    menuToggle.textContent =
        navigation.classList.contains("active") ? "✕" : "☰";
});

// Close menu after clicking a navigation link
document.querySelectorAll(".nav a").forEach(function (link) {
    link.addEventListener("click", function () {
        navigation.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        const target = document.querySelector(link.getAttribute("href"));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
