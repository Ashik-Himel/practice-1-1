const bar = document.querySelector(".fa-bars");
const cross = document.querySelector(".fa-xmark");
const nav = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav a");

bar.addEventListener("click", function() {
    nav.classList.add("active");
});
cross.addEventListener("click", function() {
    nav.classList.remove("active");
});
navLink.forEach(n => n.addEventListener("click", function() {
    nav.classList.remove("active");
}));