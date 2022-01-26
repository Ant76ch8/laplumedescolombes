const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300){
        nav.style.top = 0;
    } else {
        nav.style.top = "-100px";
    }
});