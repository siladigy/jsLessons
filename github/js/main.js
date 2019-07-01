let money = 10000;
let income = 'taxi';
let addExpenses = "house, insurance, car";
let deposit = true;
let mission = 50000;
let period = 5;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(income.length);

console.log("Период "+ period +" месяцев");
console.log("Цель заработать "+ mission +" долларов");

let exp = addExpenses.toLowerCase();
let expArr = exp.split(", ");
console.log(expArr);

let budgetDay = money/30;
console.log(budgetDay + "\n" +money%30);