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

  const menu = document.querySelector('menu');

    document.addEventListener('click', (event) => {
      let target = event.target;
      if(target.closest('.menu')){
        menu.classList.add('active-menu');
      } else if (!target.classList.contains('active-menu')){
        menu.classList.remove('active-menu');
      } 
    });

}
toggleMenu();

//popup

const togglePopup = () => {

  const popup = document.querySelector('.popup '),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupContent = document.querySelector('.popup-content');

    const screenWidth = () => {
      if(window.outerWidth > 800) popupContent.classList.toggle('popup-active');
    }

        popupBtn.forEach((btn) => {
          btn.addEventListener('click', () => {
            popup.style.display = 'block';
            screenWidth();
            });
        });

        popup.addEventListener('click', (event) => {
            let target = event.target;

            if(target.classList.contains('popup-close')){
              popup.style.display = 'none';
                screenWidth();
            } else {
              target = target.closest('.popup-content');

              if(!target){
                popup.style.display = 'none';
                screenWidth();
              }
            }
              
        });
}
togglePopup();

//tabs

const tabs = () => {

  const tabHeader = document.querySelector('.service-header'),
        tab = tabHeader.querySelectorAll('.service-header-tab'),
        tabContent = document.querySelectorAll('.service-tab');
  
  const toggleTabContent = (index) => {
    for (let i = 0; i < tabContent.length; i++){
      if(index === i){
        tab[i].classList.add('active');
        tabContent[i].classList.remove('d-none');
      } else {
        tab[i].classList.remove('active');
        tabContent[i].classList.add('d-none');
      }
    }
  };
        tabHeader.addEventListener('click', (event) => {
          let target = event.target;
              target = target.closest('.service-header-tab');

          if(target){
            tab.forEach((item, i) => {
              if(item === target){
                toggleTabContent(i);
              }
            });
          }
        });


}
tabs();

});
