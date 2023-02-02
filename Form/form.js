const Container =document.querySelector(".container")
const BtnsignUP = document.querySelector(".signupbtn")
const Login =document.querySelector(".loginbtn")

BtnsignUP.addEventListener("click",()=>{
    Container.classList.add("signup-mode")
})
Login.addEventListener("click",()=>{
    Container.classList.remove("signup-mode")
})