function scrolling() {

  const mission = document.querySelector(".mission");
  const values = document.querySelector(".values");
  const myself = document.querySelector(".myself");
  const founder = document.querySelector(".founder-border");
  const gif = document.querySelector(".gif-part");
  const top = document.querySelector("#back2Top");

  const missionbtn = document.querySelector("#mission-btn");
  const valuesbtn = document.querySelector(".values-btn");
  const myselfbtn = document.querySelector(".myself-btn");
  const storybtn = document.querySelector(".story-btn");
  const gifbtn = document.querySelector(".gif-btn");


missionbtn.addEventListener('click',function (){
    mission.scrollIntoView({
    block: 'nearest',
    behavior: 'smooth',
    inline: 'nearest'
  });
});

valuesbtn.addEventListener('click',function (){
    values.scrollIntoView({
    block: 'nearest',
    behavior: 'smooth',
    inline: 'nearest'
  });
});

myselfbtn.addEventListener('click',function (){
    myself.scrollIntoView({
    block: 'nearest',
    behavior: 'smooth',
    inline: 'nearest'
  });
});

storybtn.addEventListener('click',function (){
    founder.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'nearest'
  });
});

gifbtn.addEventListener('click',function (){
    gif.scrollIntoView({
    block: 'center',
    behavior: 'smooth',
    inline: 'nearest'
  });
});

top.addEventListener('click',function (){
    scroll(0, 0);
  });

}



scrolling();


export { scrolling };
