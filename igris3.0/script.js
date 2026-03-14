function toggleMenu(){
document.getElementById("nav").classList.toggle("active")
}

const reveals=document.querySelectorAll(".reveal")

window.addEventListener("scroll",()=>{

reveals.forEach(el=>{

let top=el.getBoundingClientRect().top
let windowHeight=window.innerHeight

if(top<windowHeight-100){
el.classList.add("active")
}

})

})