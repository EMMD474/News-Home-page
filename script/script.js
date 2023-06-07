const menuOpen = document.getElementsByClassName("open")[0];
const menuClose = document.getElementsByClassName("close")[0];
const menuNav = document.getElementsByClassName("menu-nav")[0];

menuOpen.addEventListener("click", (e)=> {
    menuNav.classList.add("active");
})

menuClose.addEventListener("click", (e)=> {
    menuNav.classList.remove("active");
})