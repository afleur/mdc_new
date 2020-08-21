import "bootstrap";

import { initUpdateNavbarOnScroll } from '../plugins/navbar';

document.addEventListener('turbolinks:load', () => {
  // Call your JS functions here
  initUpdateNavbarOnScroll();
});

import { go } from '../plugins/hometitle';

import { scrolling } from '../plugins/scroll';
