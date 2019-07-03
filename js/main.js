let money = +prompt("Ваш месячный доход");
let income = 'taxi';
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
let deposit = confirm("Есть ли у вас депозит в банке?");
let mission = 50000;
let period = 5;

console.log(addExpenses.split(", "));

function showTypeof(value) {
    return(typeof value);
}
console.log(showTypeof(money));
console.log(showTypeof(income));
console.log(showTypeof(deposit));

let que1 = prompt("Какие обязательные ежемесячные расходы у вас есть?");
let que2 = +prompt("Во сколько это обойдется?");
let que3 = prompt("Какие обязательные ежемесячные расходы у вас есть?");
let que4 = +prompt("Во сколько это обойдется?");


function getExpensesMonth() {
    return(que2+que4);
}

function getAccumulatedMonth() {
    return(money - getExpensesMonth());
}
let accumulatedMonth = getAccumulatedMonth();

console.log("Накопления за месяц : " + accumulatedMonth);

function getPeriod() {
    return (accumulatedMonth * period);
}
console.log("Накопления за период : " + getPeriod());

function getTargetMonth() {
    return(mission/accumulatedMonth);
}
console.log("Срок достижения цели в месяцах : " + Math.floor(getTargetMonth()));

let budgetDay = Math.floor(accumulatedMonth/30);
console.log("Накопления за день : " + budgetDay);


function getStatusIncome() {
    if(budgetDay>800) return("Высокий уровень дохода");
    else if(budgetDay>300 && budgetDay<800) return("Средний уровень дохода");
    else if(budgetDay>0 && budgetDay<300) return("Низкий уровень дохода");
    else if(budgetDay<0) return("Что то пошло не так");
}
console.log(getStatusIncome());