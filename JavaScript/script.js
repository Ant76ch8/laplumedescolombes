const nav = document.querySelector(".menuAnime");
const logoAccueil = document.querySelector(".logoAccueil");

window.addEventListener("scroll", () => {

    // animation menu accueil
    if (window.scrollY > 400){
        nav.style.top = 0;
    } else {
        nav.style.top = "-100px";
    }
});

window.addEventListener("load", () => {
    
    // au chargement animation page accueil
    logoAccueil.className = "logoAccueil visible";
});

(function() {
    const presentationAccueil = document.querySelector(".presentation_anime");
    var posImg = presentationAccueil.offsetTop;
    function effet(){
      var posCurseur = this.pageYOffset;
      if(posImg-posCurseur<200){
        presentationAccueil.className = "col-xl-8 d-flex flex-column align-items-center visible presentation_anime";
      }
    }
    window.addEventListener("scroll", effet);
  })();
(function() {
    const adhesionAccueil = document.querySelector(".adhesion_anime");
    var posImg = adhesionAccueil.offsetTop;
    function effet(){
      var posCurseur = this.pageYOffset;
      if(posImg-posCurseur<200){
        adhesionAccueil.className = "col-xl-8 d-flex flex-column align-items-center visible adhesion_anime";
      }
    }
    window.addEventListener("scroll", effet);
  })();

  