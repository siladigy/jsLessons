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

  export default calc;