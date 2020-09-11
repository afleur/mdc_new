import "bootstrap";

import { changeWord } from '../plugins/hometitle';
import { openForm } from '../plugins/newsletter';
import { menuList } from '../plugins/menuList';
import { initUpdateNavbarOnScroll } from '../plugins/navbar';

document.addEventListener('turbolinks:load', () => {
  // Call your JS functions here
  initUpdateNavbarOnScroll();
});

import { scrolling } from '../plugins/scroll';

