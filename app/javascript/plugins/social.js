function socialMouseOver() {

  const fbwhite = document.querySelector(".facebook-white-navbar");
  const fbsable = document.querySelector(".facebook-sable-navbar");

  fbwhite.addEventListener("mouseover", function() {
    //fbsable.classList.remove("no-display");
    //fbwhite.target.style.display = "none";
    alert ("it works");
  });

}

export { socialMouseOver };
