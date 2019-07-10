'use strict';

let money, 
    start = function() {
        do {
            money = prompt("Ваш месячный доход", 15000);
        }
        while(isNaN(money) || money == '' || money == null){
        console.log(money);
        }
    }; 
    start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    asking: function() {

        if(confirm("есть ли у вас дополнительный заработок?")) {
            let itemIncome = prompt("какой у вас дополнительный зароботок ?", "таксую");
            let cashIncome = prompt("Сколько вы на этом зарабатываете в месяц", 9500);
            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
            appData.addExpenses = addExpenses.split(",  ");
            appData.deposit = confirm("Есть ли у вас депозит в банке?");
        let sum = 0;
            for(let i=0; i<2; i++){
                if (i===0) {
                    appData.expenses[prompt("Какие обязательные ежемесячные расходы у вас есть?", "аренда")] = sum = +prompt("Во сколько это обойдется?", 1500);
                } else if (i===1) {
                    appData.expenses[prompt("Какие обязательные ежемесячные расходы у вас есть?", "продукты")] = sum = +prompt("Во сколько это обойдется?", 850);
                }     
                while(isNaN(sum) || sum == '' || sum == null){
                sum = +prompt("Во сколько это обойдется?");
                } 
            } 
    },  
    budget: Number(money),
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: function() {
        for (let key in appData.expenses){
            appData.expensesMonth  = (appData.expenses[key] + appData.expenses[key]);
        }; 
    },  
    getBudget: function() {
        let month = appData.budget - appData.expensesMonth;
            if(month > 0){console.log("Накопления за месяц : " + month);} 
            else {console.log("Нет накоплений за месяц");}
        appData.budgetMonth = month;
        let day = Math.floor(appData.budgetMonth / 30);
            if(day > 0) {console.log("Накопления за день : " + day);}
            else {console.log("Что то пошло не так");}
        appData.budgetDay = day;
    },
    getTargetMonth: function() {
        let result = Math.floor(appData.mission/appData.budgetMonth);
            if (result > 0) return "Цель будет достигнута за " + result + " месяцев";
            else return "Цель не будет достигнута";
    },
    getStatusIncome: function() {
        if(appData.budgetDay>800) return("Высокий уровень дохода");
        else if(appData.budgetDay>300 && appData.budgetDay<800) return("Средний уровень дохода");
        else if(appData.budgetDay>0 && appData.budgetDay<300) return("Низкий уровень дохода");
        else return("Что то пошло не так");
    },
    getInfoDeposit: function () {
        if(appData.deposit){
            appData.percentDeposit = prompt("какой годовой процент?", "10");
            appData.moneyDeposit =  prompt("какая сумма заложена", 10000);
        }
    },
    calcSavedMoney: function () {
        return appData.budgetMonth * appData.period; 
    }
}
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getInfoDeposit();

console.log(appData.getTargetMonth());

console.log(appData.getStatusIncome());

console.log("Наша программа включает в себя данные: ");
for (let data in appData){
    console.log(data);
}
for (let item in appData.income){
    console.log("дополнительный источник заработка : " + item);
    console.log("сумма дополнительного заработка : " + appData.income[item]);
}

for (let item in appData.expenses){
    console.log("обязательные расходы : " + item);
}
console.log("годовой процент депозита : " + appData.percentDeposit);
console.log("сумма депозита : " + appData.moneyDeposit);

let str = appData.addExpenses.join();
console.log(str.toUpperCase());