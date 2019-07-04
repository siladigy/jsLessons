let money ;
let income = 'taxi';
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
let deposit = confirm("Есть ли у вас депозит в банке?");
let mission = 50000;
let period = 5;

let start = function() {
    do {
        money = prompt("Ваш месячный доход");
    }
    while(isNaN(money) || money == '' || money == null){
       console.log(money);
    }
}; 
start();

console.log(addExpenses.split(", "));

function showTypeof(value) {
    return(typeof value);
}
console.log(showTypeof(money));
console.log(showTypeof(income));
console.log(showTypeof(deposit));


let expenses1,
    expenses2;

let expensesMonth = function (){
    let sum = 0;

    for(let i=0; i<2; i++){
        if (i===0){
            expenses1 = prompt("Какие обязательные ежемесячные расходы у вас есть?");
        } else if (i===1){
            expenses2 = prompt("Какие обязательные ежемесячные расходы у вас есть?");
        }
        
        sum += prompt("Во сколько это обойдется?");
        
        while(isNaN(sum) || sum == '' || sum == null){
            sum = prompt("Во сколько это обойдется?");
        }
        
    }
    return sum; 
};

let expensesAmount = expensesMonth();


function getAccumulatedMonth() {
    return(money - expensesAmount);
}
let accumulatedMonth = getAccumulatedMonth();

console.log("Накопления за месяц : " + accumulatedMonth);

function getTargetMonth() {
    let result = Math.floor(mission/accumulatedMonth);
    
    if (result > 0){
        return "Цель будет достигнута за " + result + " месяцев";
    } else {
        return "Цель не будет достигнута";
    }
}
console.log(getTargetMonth());

let budgetDay = function () {
    let day = Math.floor(accumulatedMonth/30);
    if(day > 0){
        return day;
    } else {
        return "Что то пошло не так";
    }
};
console.log(budgetDay());


function getStatusIncome() {
    if(budgetDay()>800) return("Высокий уровень дохода");
    else if(budgetDay()>300 && budgetDay<800) return("Средний уровень дохода");
    else if(budgetDay()>0 && budgetDay<300) return("Низкий уровень дохода");
    else if(budgetDay()<0) return("Что то пошло не так");
}
console.log(getStatusIncome());