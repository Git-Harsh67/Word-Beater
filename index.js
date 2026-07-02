const startbtn = document.querySelector(".btn")
const homePage = document.querySelector("#homePage") 
const mainPage = document.querySelector("#mainPage") 

startbtn.addEventListener("click", ()=>{
    console.log("clicked")
    homePage.style.display = "none"
    mainPage.style.display = "flex"
})


