'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import attr from './modules/attr';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
  
  // timer
  countTimer();
  // menu
  toggleMenu();
  //popup
  togglePopup();
  //tabs
  tabs();
  //slider
  slider();
  // attributes/regulars
  attr();
  // calculator
  calc(100);
  // send-ajax-form
  sendForm();
  