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

};
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
};
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


};
tabs();

//slider

const slider = () => {

  const slide = document.querySelectorAll('.portfolio-item'),
        btn = document.querySelectorAll('.portfolio-btn'),
        slider = document.querySelector('.portfolio-content'),
        ul = document.querySelector('.portfolio-dots');

      let createLi = () => {
        for (let i=0; i<slide.length; i++){
        let li = document.createElement("LI");
        li.classList.add('dot');
        ul.appendChild(li);
        }
      }

      createLi();
      
      const dot = document.querySelectorAll('.dot');


   let currentSlide = 0,
        interval;

   const prevSlide = (elem, index, strClass) => {

    elem[index].classList.remove(strClass);

   }

   const nextSlide = (elem, index, strClass ) => {

    elem[index].classList.add(strClass);

   }

    const autoPlaySlide = () => {

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if(currentSlide >= slide.length){
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');

    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time); 
    }

    const stopSlide = () => {
      clearInterval(interval);
    }

    slider.addEventListener('click', (event) => {

      event.preventDefault();

      let target = event.target;

      if(!target.matches('.portfolio-btn, .dot')){
        return;
      }

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if(target.matches('#arrow-right')){
        currentSlide++;
      } else if(target.matches('#arrow-left')){
        currentSlide--;
      } else if(target.matches('.dot')){
        dot.forEach((elem, index) => {
          if(elem === target){
            currentSlide = index;
          }
        });
      }
      if(currentSlide >= slide.length){
        currentSlide = 0;
      }

      if(currentSlide < 0){
        currentSlide = slide.length -1;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');

    });

    slider.addEventListener('mouseover', (event) => {
      if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
        stopSlide();
      }
    });

    slider.addEventListener('mouseout', (event) => {
      if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
        startSlide();
      }
    });

    startSlide(2000);
 
};
slider();

});

// attributes/regulars

const attr = () => {

  const command = document.getElementById('command');

     command.addEventListener('mouseover', (event) => {
      let target = event.target;
      if(target.classList.contains('command__photo')){
        target.dataset.link = target.src;
        target.src = target.dataset.img;
      }  
     });

     command.addEventListener('mouseout', (event) => {
      let target = event.target;
      if(target.classList.contains('command__photo')){
        target.src = target.dataset.link;
      }  
     });


     const calcBlock = document.querySelector('.calc-block');

     calcBlock.addEventListener('input', (e) => {

      let target = event.target;

      target.value = target.value.replace(/\D/g, '');

     });

}
attr();

