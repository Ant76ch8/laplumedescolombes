const nav = document.querySelector(".menuAnime");
const presentationAccueil = document.querySelector(".presentation_anime");
const adhesionAccueil = document.querySelector(".adhesion_anime");
const couvLivre = document.querySelector(".couv-livre");
const achat = document.querySelector(".achat");
const titreAsso = document.querySelector(".titreAsso");
const histoire = document.querySelector(".histoire");
const membreAsso = document.querySelector(".membreAsso");
const nousContacter = document.querySelector(".nousContacter");


window.addEventListener("load", () => {
    // au chargement animation page asso
    titreAsso.className = "titreAsso visible";
    setTimeout(() => {
        histoire.className = "row d-flex justify-content-between visible histoire";
    }, 300);
});

window.addEventListener("scroll", () => {

    // animation menu accueil
    if (window.scrollY > 400){
        nav.style.top = 0;
    } else {
        nav.style.top = "-100px";
    }

    // animation contenu accueil
    if (window.scrollY > 1200){
        presentationAccueil.className = "col-xl-8 d-flex flex-column align-items-center visible presentation_anime";
    }
    if (window.scrollY > 1600){
        adhesionAccueil.className = "col-xl-8 d-flex flex-column align-items-center visible adhesion_anime";
        
    }
});

window.addEventListener("scroll", () => {
    // animation page asso
    if (window.scrollY > 400){
        membreAsso.className = "row membreAsso visible";
    }
    if (window.scrollY > 700){
        nousContacter.className = "row d-flex justify-content-start visible nousContacter";
    }
    
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 1400){
        couvLivre.className = "col-lg-3 couv-livre visible";
        setTimeout(()=>{
            achat.className = "col-lg-4 offset-lg-1 d-flex flex-column justify-content-center achat visible";
        }, 300)};
});