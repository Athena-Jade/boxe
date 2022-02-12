let toggle = document.querySelector(".toggle");
let body = document.querySelector("body");

// quand l'user clique sur la nav
toggle.addEventListener("click",  () => {
    body.classList.toggle("open");
})