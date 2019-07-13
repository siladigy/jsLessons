'use strict';

let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    incomeAdd = document.getElementsByTagName('button')[0],
    expensesAdd = document.getElementsByTagName('button')[1],
    checkbox = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    incomeItem = document.querySelectorAll('.income-items ');



function isString(str) {
    if(isNaN(str)) {
        return str;
    } else {
        str = prompt("Какие обязательные ежемесячные расходы у вас есть?");
        isString(str);
    }
}


let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    period: 3,
    start: function() {

        start.style.display = 'none';
        cancel.style.display = 'block';


        appData.budget = +salaryAmount.value;

        appData.disableInput();
        appData.getExpenses(); 
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses(); 
        appData.getAddIncome(); 
        appData.getBudget();

        appData.showResult();
    },
    showResult: function() {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay; 
        expensesMonthValue.value = appData.expensesMonth; 
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', '); 
        targetMonthValue.value = appData.getTargetMonth();
        incomePeriodValue.value = appData.calcPeriod();
        periodSelect.addEventListener('change', function () {
            incomePeriodValue.value = periodSelect.value * appData.budgetMonth;
           });
    },
    disableInput: function (){
        let inputs = document.getElementsByTagName('input');
            for(let i = 0; i < inputs.length; i++){
                if(inputs[i].type == 'text'){
                    inputs[i].disabled = 'disabled';
                }
            }
    },
    addExpensesBlock: function(){
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAdd);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
            expensesAdd.style.display = 'none';
        }
    },
    getExpenses: function() {
        expensesItems.forEach(function(item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = cashExpenses;
            }  
        });
    },
    addIncomeBlock: function() {
        let cloneIncomeItem = incomeItem[0].cloneNode(true);
        incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomeAdd);
        incomeItem = document.querySelectorAll('.income-items');
        if(incomeItem.length === 3){
            incomeAdd.style.display = 'none';
        }
    },
    getIncome: function () {
        incomeItem.forEach(function(item) {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cashIncome !== ''){
                appData.income[itemIncome] = cashIncome;
            }   
        });

        for (let key in appData.income){
            appData.incomeMonth += +appData.income[key];
        }
    },
    getAddExpenses: function() {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== ''){
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function() {
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if (itemValue !== ''){
                appData.addIncome.push(itemValue); 
            }
        });
    },
    getExpensesMonth: function() {
        for (let key in appData.expenses){
            appData.expensesMonth  += +appData.expenses[key];
        }; 
    },  
    getBudget: function() {
        let month = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetMonth = month;
        let day = Math.floor(appData.budgetMonth / 30);
        appData.budgetDay = day;
    },
    getTargetMonth: function() {
        return Math.ceil(targetAmount.value/appData.budgetMonth);
    },
    getStatusIncome: function() {
        if(appData.budgetDay>800) return("Высокий уровень дохода");
        else if(appData.budgetDay>300 && appData.budgetDay<800) return("Средний уровень дохода");
        else if(appData.budgetDay>0 && appData.budgetDay<300) return("Низкий уровень дохода");
        else return("Что то пошло не так");
    },
    getInfoDeposit: function () {
        if(appData.deposit){
            appData.percentDeposit = +prompt("какой годовой процент?", "10");
            while(isNaN(appData.percentDeposit) || appData.percentDeposit == '' || appData.percentDeposit == null){
                appData.percentDeposit = +prompt("какой годовой процент?", "10");
                } 
            appData.moneyDeposit =  +prompt("какая сумма заложена", 10000);
            while(isNaN(appData.moneyDeposit) || appData.moneyDeposit == '' || appData.moneyDeposit == null){
                appData.moneyDeposit =  +prompt("какая сумма заложена", 10000);
                } 
        }
    },
    calcPeriod: function () {
        return appData.budgetMonth * periodSelect.value; 
    },
    getStartEnable: function() {
        if(salaryAmount.value !== ''){ 
            appData.start();
        } 
    }
}
// start.disabled = true;
// start.style.cursor= "not-allowed";
// document.addEventListener('mousemove', appData.getStartEnable);
start.addEventListener('click', appData.getStartEnable);
expensesAdd.addEventListener('click', appData.addExpensesBlock);
incomeAdd.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('change', function () {
   document.querySelector('.period-amount').innerHTML = periodSelect.value;
  });



// console.log(appData.getTargetMonth());

// console.log(appData.getStatusIncome());

// console.log("Наша программа включает в себя данные: ");
// for (let data in appData){
//     console.log(data);
// }


// let expenses = appData.addExpenses.toString();

// function titleCase(str) {
//     let splitStr = str.toLowerCase().split(' ');
//     for (let i = 0; i < splitStr.length; i++) {
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
//     }
//     return splitStr.join(' '); 
//  }
//  console.log(titleCase(expenses));


