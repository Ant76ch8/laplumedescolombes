(function() {
    const couvLivre = document.querySelector(".couv-livre");
    const achat = document.querySelector(".achat");
    var posImg = couvLivre.offsetTop;
    function effet(){
      var posCurseur = this.pageYOffset;
      if(posImg-posCurseur<300){
        couvLivre.className = "col-lg-3 couv-livre visible";
        setTimeout(()=>{
            achat.className = "col-lg-4 col-8 offset-lg-1 d-flex flex-column justify-content-center visible achat";
        }, 200)};
    }
    window.addEventListener("scroll", effet);
  })();
(function() {
    const aVenir = document.querySelector(".a-venir");
    const couvLivre2 = document.querySelector(".couv-livre2");
    var posImg = aVenir.offsetTop;
    function effet(){
      var posCurseur = this.pageYOffset;
      if(posImg-posCurseur<300){
        aVenir.className = "col-lg-4 d-flex flex-column justify-content-center visible a-venir";
        setTimeout(()=>{
            couvLivre2.className = "col-lg-3 offset-lg-1 couv-livre2 visible";
        }, 200)};
    }
    window.addEventListener("scroll", effet);
  })();
