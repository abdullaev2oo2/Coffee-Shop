const mobileNav = document.querySelector("#burger-menu");
const burgerBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const links = document.querySelectorAll(".mobile__nav-link");
const searchBtn = document.querySelector("#search-icon");
const inputBox = document.querySelector("#inputBox");

links.forEach((link) => {
    link.addEventListener("click", () => {
        mobileNav.classList.remove("open")  
    })
});
burgerBtn.addEventListener("click",() => {
    mobileNav.classList.add("open")
});
closeBtn.addEventListener("click",() => {
    mobileNav.classList.remove("open")
});
searchBtn.addEventListener("click", () => {
    if (inputBox.style.display == "flex")
        inputBox.style.display = "none"
    else
        inputBox.style.display = "flex"

});
