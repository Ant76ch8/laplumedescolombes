const titreRejoindre = document.querySelector(".titreRejoindre");
const rejoignezNous = document.querySelector(".rejoignezNous");

function load () {

    // au chargement animation page adhésion
    
    titreRejoindre.className = "titreRejoindre visible";
    setTimeout(() => {
        rejoignezNous.className = "row rejoignezNous visible";
    }, 200);
};
window.addEventListener("load", load);