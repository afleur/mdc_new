const socialMouseOver = () => {

  const insta = document.querySelectorAll("img[alt=instagram]");

  insta.addEventListener('mouseover', function() {
    this.src = '../../../assets/images/instagram-sable.png';
  });

}

export { socialMouseOver };
