import "bootstrap";

import { menuList } from '../plugins/menuList';
import { initUpdateNavbarOnScroll } from '../plugins/navbar';

document.addEventListener('turbolinks:load', () => {
  // Call your JS functions here
  initUpdateNavbarOnScroll();
});

import { scrolling } from '../plugins/scroll';


import { go } from '../plugins/hometitle';
