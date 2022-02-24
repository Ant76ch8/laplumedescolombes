const nav = document.querySelector(".menuAnime");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400){
        nav.style.top = 0;
    } else {
        nav.style.top = "-100px";
    }
});