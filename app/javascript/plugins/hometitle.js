function changeWord (){
    const entrepreneure = document.querySelector(".entrepreneure");
    const artiste = document.querySelector(".artiste");
    const porteuse = document.querySelector(".porteuse");
    const sportive = document.querySelector(".sportive");
    const dirigeante = document.querySelector(".dirigeante");
    const militante = document.querySelector(".militante");

    const words = [entrepreneure, artiste, porteuse, sportive, dirigeante, militante, porteuse];

    const n = words.length-1;
    const loop = 0;
      for (let i=0; i<n+1; i++) {
        const myCurrentDiv = words[i%n];
        const myPreviousDiv = words[(i-1)%(n)];
        setTimeout(()=> {
          //myCurrentDiv.style.display = "";
          myCurrentDiv.classList.remove("no-display");
          myPreviousDiv.classList.add("no-display");
        }, i*3000)
    }
}

changeWord();

const go = setInterval(changeWord, 18000);


export { go };
