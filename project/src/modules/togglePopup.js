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

  export default togglePopup;