const nav = document.querySelector(".menuAnime");
const presentationAccueil = document.querySelector(".presentation_anime");
const adhesionAccueil = document.querySelector(".adhesion_anime");
const couvLivre = document.querySelector(".couv-livre");
const achat = document.querySelector(".achat");
const titreAsso = document.querySelector(".titreAsso");
const histoire = document.querySelector(".histoire");
const membreAsso = document.querySelector(".membreAsso");
const nousContacter = document.querySelector(".nousContacter");
const couvLivre2 = document.querySelector(".couv-livre2");
const aVenir = document.querySelector(".a-venir");
const introEvent = document.querySelector(".intro_evenements");
const titreEvent = document.querySelector(".titreEvenements");
const rencontres = document.querySelector(".rencontres");
const atelierPoesie = document.querySelector(".atelierPoesie");
const titreRejoindre = document.querySelector(".titreRejoindre");
const rejoignezNous = document.querySelector(".rejoignezNous");
const logoAccueil = document.querySelector(".logoAccueil");


window.addEventListener("load", () => {

    // au chargement animation page asso
    titreAsso.className = "titreAsso visible";
    setTimeout(() => {
        histoire.className = "row d-flex justify-content-between visible histoire";
    }, 300);
});
window.addEventListener("load", () => {

    // au chargement animation page asso
    logoAccueil.className = "logoAccueil visible";
});

window.addEventListener("load", () => {

    // au chargement animation page évènement
    titreEvent.className = "titreEvenements visible";
    setTimeout(() => {
        introEvent.className = "row intro_evenements visible";
    }, 200);
    setTimeout(() => {
        rencontres.className = "row rencontres visible";
    }, 400);
    setTimeout(()=>{
        atelierPoesie.className = "row beige atelierPoesie visible";
    },600);
});

window.addEventListener("load", () => {

    // au chargement animation page adhésion
    titreRejoindre.className = "titreRejoindre visible";
    setTimeout(() => {
        rejoignezNous.className = "row rejoignezNous visible";
    }, 200);
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
    if (window.scrollY > 200){
        membreAsso.className = "row beige membreAsso visible";
    }
    if (window.scrollY > 500){
        nousContacter.className = "row d-flex justify-content-start visible nousContacter";
    }
    
});

window.addEventListener("scroll", () => {
    //animation page poèmes
    if (window.scrollY > 1300){
        couvLivre.className = "col-lg-3 couv-livre visible";
        setTimeout(()=>{
            achat.className = "col-lg-4 offset-lg-1 d-flex flex-column justify-content-center achat visible";
        }, 200)};
    if (window.scrollY > 1900){
        aVenir.className = "col-lg-4 d-flex flex-column justify-content-center visible a-venir";
        setTimeout(()=>{
            couvLivre2.className = "col-lg-3 offset-lg-1 couv-livre2 visible";
        }, 200)};
});

window.addEventListener("scroll", () => {
    //animation page évènement
    if (window.scrollY > 100){
        atelierPoesie.className = "row beige atelierPoesie visible";
    }
});