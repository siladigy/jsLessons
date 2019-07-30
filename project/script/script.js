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
  
  
      const animation = () => {
        let pos = 0;
        setInterval(frame, 1);
          function frame() {
            if (pos == 150) {
              clearInterval(setInterval(frame, 1));
            } else {
              pos++; 
              popupContent.style.top = pos + "px"; 
            }
          }
      };
  
      const screenWidth = () => {
        if(window.outerWidth > 800){  
          animation();
        }
         
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
                clearInterval(animation);
              } else {
                target = target.closest('.popup-content');
  
                if(!target){
                  popup.style.display = 'none';
                  clearInterval(animation);
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
        if(!target.matches('.calc-type')){
        target.value = target.value.replace(/\D/g, '');
        }
       });
  
  }
  attr();
  
  
  // calculator
  
  const calc = (price = 100) => {
  
    const calcBlock = document.querySelector('.calc-block'),
          calcType = document.querySelector('.calc-type'),
          calcSquare = document.querySelector('.calc-square'),
          calcDay = document.querySelector('.calc-day'),
          calcCount = document.querySelector('.calc-count'),
          totalValue = document.getElementById('total');
  
          let countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                 squareValue = +calcSquare.value;
  
                 if(calcCount.value > 1){
                  countValue += (calcCount.value - 1) / 10;
                 }
  
                 if(calcDay.value && calcDay.value < 5){
                   dayValue *= 2;
                 }else if (calcDay.value && calcDay.value < 10) {
                   dayValue *= 1.5;
                 }
                if(typeValue && squareValue){
                  total = price * typeValue * squareValue * countValue * dayValue;
                }
  
                const count = () => {
                  let current = 0;
                 let timer = setInterval( () => {
                   if(total > 0 && current < total){
                    current += 10;
                    totalValue.textContent = current;
                   }
                    else {
                        clearInterval(timer);
                        totalValue.textContent = Math.ceil(total);
                    }
                }, 1);
                };
  
              count();
          };
  
          calcBlock.addEventListener('change',(event) => {
            let target = event.target;
            if(target.matches('.calc-type') || target.matches('.calc-square') || target.matches('.calc-day') || target.matches('.calc-count')){
              countSum();
            }
          });
  
  };
  calc(100);
  
  
  // send-ajax-form
  
  const sendForm = () => {
  
    const errorMessage = 'что то пошло не так..',
          loadMessage = 'загрузка..',
          successMessage = 'спасибо! мы скоро с вами свяжемся';
  
      const form1 = document.getElementById('form1'),
            form2 = document.getElementById('form2'),
            form3 = document.getElementById('form3');
  
      const statusMessage = document.createElement('div');
      
      const submitForm = (form) => {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
        let body = {};
  
        for (let val of formData.entries()){
          body[val[0]] = val[1];
        }
        postData(body, 
          () => {
            statusMessage.textContent = successMessage;
            form.reset();
        }, 
          (error) => {
            statusMessage.textContent = errorMessage;
            console.log(error);
        });
      });
    };
  
    submitForm(form1);
    submitForm(form2);
    submitForm(form3);
  
  
      const postData = (body, outputData, errorData) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
          if(request.readyState !==4){
            return;
          }
  
          if(request.status === 200){
            outputData();
          } else {
            errorData(request.status);
          }
        });
        
        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');
        
        request.send(JSON.stringify(body));
      };
  
      const tel = document.querySelectorAll('input[type=tel]');
      tel.forEach((elem) => {
        elem.addEventListener('input', () => {
          elem.value = elem.value.replace(/[^+0-9]+/gi, "");
        });
      });
      const text = document.querySelectorAll('input[type=text]');
      text.forEach((elem) => {
        elem.addEventListener('input', () => {
          elem.value = elem.value.replace(/[^а-я ]+/gi, "");
        });
      });
      const message = document.getElementById('form2-message');
  
      message.addEventListener('input', () => {
        message.value = message.value.replace(/[^а-я ]+/gi, "");
      });
  };
  sendForm();
