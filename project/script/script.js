window.addEventListener('DOMContentLoaded', function(){

'use strict';

// timer

function countTimer(deadline) {

    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');


    function getTimeRemaining() {
        let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow)/1000,
        seconds =  Math.floor(timeRemaining % 60 ),
        minutes = Math.floor((timeRemaining / 60) % 60 ),
        hours = Math.floor(timeRemaining / 60 / 60 ); 

        return { timeRemaining, hours, minutes, seconds };
      }

      
      

    function updateClock() {
      function addZero(digit) {
        if(digit.toString().length == 1) return 0 + digit;
        else return digit;
        }
        let timer = getTimeRemaining();

        timerHours.textContent = timer.hours;
        timerMinutes.textContent = timer.minutes;
        timerSeconds.textContent = timer.seconds;
        
        if(timer.timeRemaining > 0) {
            setTimeout(updateClock, 1000); 
        } else if(timer.timeRemaining < 0) {
          clearTimeout(setTimeout(updateClock, 1000));
          timerHours.textContent = "00";
          timerMinutes.textContent = "00";
          timerSeconds.textContent = "00";
        } else if(timerSeconds.textContent.toString.length == 1){
          return '0' + timerSeconds.textContent;
        }
        timerHours.textContent = addZero(timerHours.textContent);
        timerMinutes.textContent = addZero(timerMinutes.textContent);
        timerSeconds.textContent = addZero(timerSeconds.textContent);
    }
    
    updateClock();

    
  }
setInterval(countTimer('23 jul 2019'), 1000);


// menu

const toggleMenu = () => {

  const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        menuItem = menu.querySelectorAll('li');

      const handlerMenu = () => {
        menu.classList.toggle('active-menu');
      };

    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);
    menuItem.forEach((item) => item.addEventListener('click', handlerMenu));
  

}
toggleMenu();

//popup

const togglePopup = () => {

  const popup = document.querySelector('.popup '),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupClose = document.querySelector('.popup-close'),
        popupContent = document.querySelector('.popup-content');

        popupBtn.forEach((btn) => {
          btn.addEventListener('click', () => {
            popup.style.display = 'block';
            popupContent.classList.toggle('popup-active');
            });
        });
        popupClose.addEventListener('click', () => {
          popup.style.display = 'none';
        });
}
togglePopup();

});