let signinform = document.querySelector(".s-form")
let loginform = document.querySelector(".l-form")
let toggleform = document.querySelectorAll(".toggleform")

toggleform.forEach((tog) => {
   tog.onclick = () => {
      loginform.classList.toggle("none")
      signinform.classList.toggle("none")
   }
})