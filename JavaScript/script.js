const nav = document.querySelector(".menuAnime");
const presentationAccueil = document.querySelector(".presentation_anime");
const adhesionAccueil = document.querySelector(".adhesion_anime");


window.addEventListener("scroll", () => {

    if (window.scrollY > 400){
        nav.style.top = 0;
    } else {
        nav.style.top = "-100px";
    }

    if (window.scrollY > 1200){
        presentationAccueil.className = "col-xl-8 d-flex flex-column align-items-center visible presentation_anime";
    }
    if (window.scrollY > 1500){
        adhesionAccueil.className = "col-xl-8 d-flex flex-column align-items-center visible adhesion_anime";
    }
    
});