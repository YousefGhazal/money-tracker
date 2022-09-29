let toggleBtn = document.querySelector(".navbar-toggler")
let aside = document.querySelector('aside')
let overlay = document.querySelector(".overlay")

toggleBtn.addEventListener("click", () => {
    aside.style.transform = "translateX(0%)";
    overlay.style.display = "block"
})

overlay.addEventListener("click", () => {
    aside.style.transform = "translateX(-120%)";
    overlay.style.display = "none"
})
