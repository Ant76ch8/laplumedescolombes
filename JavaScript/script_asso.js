window.addEventListener("load", () => {
    const titreAsso = document.querySelector(".titreAsso");
    const histoire = document.querySelector(".histoire");
    const logo = document.querySelector(".logoPageAsso");
    // au chargement animation page asso
    titreAsso.className = "titreAsso visible";
    setTimeout(() => {
        histoire.className = "row d-flex justify-content-between visible histoire";
    }, 200);
    setTimeout(() => {
        logo.className = "logoPageAsso visible";
    }, 300);
});

(function() {
    const video = document.querySelector(".video");
    var posImg = video.offsetTop;
    function effet(){
      var posCurseur = this.pageYOffset;
      if(posImg-posCurseur<400){
        video.className = "row video d-flex justify-content-center visible";  
        }
    }
    window.addEventListener("scroll", effet);
  })();
  (function() {
    const membreAsso = document.querySelector(".membreAsso");
    var posImg = membreAsso.offsetTop;
    function effet(){
      var posCurseur = this.pageYOffset;
      if(posImg-posCurseur<400){
        membreAsso.className = "row beige membreAsso visible";
        }
    }
    window.addEventListener("scroll", effet);
  })();
(function() {
    const nousContacter = document.querySelector(".nousContacter");
    var posImg = nousContacter.offsetTop;
    function effet(){
      var posCurseur = this.pageYOffset;
      if(posImg-posCurseur<400){
        nousContacter.className = "row d-flex justify-content-start visible nousContacter";
        }
    }
    window.addEventListener("scroll", effet);
  })();