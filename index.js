const startbtn = document.querySelector(".btn")
const homePage = document.querySelector("#homePage") 

startbtn.addEventListener("click", ()=>{
    console.log("clicked")
    homePage.style.display = "none"
})


