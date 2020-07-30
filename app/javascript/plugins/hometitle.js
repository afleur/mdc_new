function changeWord (){
    const entrepreneure = document.querySelector(".entrepreneure")
    const artiste = document.querySelector(".artiste");
    const porteuse = document.querySelector(".porteuse");
    const sportive = document.querySelector(".sportive");
    const dirigeante = document.querySelector(".dirigeante");
    const militante = document.querySelector(".militante");

    if (artiste.classList.contains("no-display")) {
      artiste.style.display = "";
      artiste.classList.remove("no-display");
      entrepreneure.style.display = "none";
    } else if (porteuse.classList.contains("no-display")) {
      porteuse.style.display = "";
      porteuse.classList.remove("no-display");
      artiste.style.display = "none";
    } else if (sportive.classList.contains("no-display")){
      sportive.style.display = "";
      sportive.classList.remove("no-display");
      porteuse.style.display = "none";
    } else if (dirigeante.classList.contains("no-display")){
      dirigeante.style.display = "";
      dirigeante.classList.remove("no-display");
      sportive.style.display = "none";
    } else if (militante.classList.contains("no-display")){
      militante.style.display = "";
      militante.classList.remove("no-display");
      dirigeante.style.display = "none";
    } else {
      entrepreneure.style.display = "";
      militante.style.display = "none";
      }

}

const go = setInterval(changeWord, 3000);


export { go };
