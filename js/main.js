let money = +prompt("Ваш месячный доход");
let income = 'taxi';
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
let deposit = confirm("Есть ли у вас депозит в банке?");
let mission = 50000;
let period = 5;

console.log(addExpenses.split(", "));
console.log(typeof money + " " +typeof income +  " " + typeof deposit);

let que1 = prompt("Какие обязательные ежемесячные расходы у вас есть?");
let que2 = +prompt("Во сколько это обойдется?");
let que3 = prompt("Какие обязательные ежемесячные расходы у вас есть?");
let que4 = +prompt("Во сколько это обойдется?");

budgetMonth = money - que2 - que4;
console.log(budgetMonth);

console.log(Math.ceil(mission/budgetMonth));

let budgetDay = Math.floor(budgetMonth/30);
console.log(budgetDay);

if(budgetDay>800) console.log("Высокий уровень дохода");
else if(budgetDay>300 && budgetDay<800) console.log("Средний уровень дохода");
else if(budgetDay>0 && budgetDay<300) console.log("Низкий уровень дохода");
else if(budgetDay<0) console.log("Что то пошло не так");