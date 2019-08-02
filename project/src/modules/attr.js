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

  export default attr;