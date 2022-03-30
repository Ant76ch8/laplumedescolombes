window.addEventListener("load", () => {
    const introEvent = document.querySelector(".intro_evenements");
    const titreEvent = document.querySelector(".titreEvenements");
    const rencontres = document.querySelector(".rencontres");
    const atelierPoesie = document.querySelector(".atelierPoesie");
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