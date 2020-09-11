import "bootstrap";

import { menuList } from '../plugins/menuList';
import { changeWord } from '../plugins/hometitle';
import { openForm } from '../plugins/newsletter';
import { initUpdateNavbarOnScroll } from '../plugins/navbar';

document.addEventListener('turbolinks:load', () => {
  // Call your JS functions here
  initUpdateNavbarOnScroll();
});

import { scrolling } from '../plugins/scroll';

