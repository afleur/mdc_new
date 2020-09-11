function openForm (){

    const newslet = document.querySelector(".newsletter");
    const newsletform = document.querySelector(".newsletter-partial");

  newslet.addEventListener('click',function (){
    newslet.style.display = "none";
    newsletform.classList.remove("no-display");
});

}

openForm();


export { openForm };
