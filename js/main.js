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
    incomeItem = document.querySelectorAll('.income-items '),
    data = document.querySelector('.data'),
    inputs = data.getElementsByTagName('input');
    
    
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

   
        this.budget = +salaryAmount.value;

        this.disableInput();
        this.getExpenses(); 
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses(); 
        this.getAddIncome(); 
        this.getBudget();

        this.showResult();
    },
    showResult: function() {
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay; 
        expensesMonthValue.value = this.expensesMonth; 
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', '); 
        targetMonthValue.value = this.getTargetMonth();
        incomePeriodValue.value = this.calcPeriod();
        periodSelect.addEventListener('change', function () {
            incomePeriodValue.value = periodSelect.value * appData.budgetMonth;
           });
    },
    disableInput: function (){
            for(let i = 0; i < inputs.length; i++){
                if(inputs[i].type == 'text'){
                    inputs[i].disabled = 'true';
                }
            }
    },
    addExpensesBlock: function(){
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        for (let i = 0; i < cloneExpensesItem.childNodes.length; i++) {
            cloneExpensesItem.childNodes[i].value = "";
        }
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAdd);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
            this.style.display = 'none';
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
        for (let i = 0; i < cloneIncomeItem.childNodes.length; i++) {
            cloneIncomeItem.childNodes[i].value = "";
        }
        incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomeAdd);
        incomeItem = document.querySelectorAll('.income-items');
        if(incomeItem.length === 3){
            this.style.display = 'none';
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
        for (let key in this.income){
            this.incomeMonth += +this.income[key];
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
        for (let key in this.expenses){
            this.expensesMonth  += +this.expenses[key];
        }; 
    },  
    getBudget: function() {
        let month = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetMonth = month;
        let day = Math.floor(this.budgetMonth / 30);
        this.budgetDay = day;
    },
    getTargetMonth: function() {
        return Math.ceil(targetAmount.value/this.budgetMonth);
    },
    calcPeriod: function () {
        return this.budgetMonth * periodSelect.value; 
    },
    getStartEnable: function() {
        if(salaryAmount.value !== ''){ 
            this.start();
        } 
    },
    applyDigitInput: function(){
        let inputDigit = document.querySelectorAll('input[placeholder= "Сумма"]');
        for(let i = 0; i<inputDigit.length; i++){
            inputDigit[i].addEventListener('input', function(){
                this.value = this.value.replace(/[^\d.]/g, '');
            });
        }
    },
    applyTextInput: function(){
        let inputText = document.querySelectorAll('input[placeholder= "Наименование"]');
        for(let i = 0; i<inputText.length; i++){
            inputText[i].addEventListener('input', function(){
                this.value = this.value.replace(/[^. ,а-я]/g, '');
            });
        }
    },
    reset: function() {
        location.reload();
    }
}


start.addEventListener('click', appData.getStartEnable.bind(appData));
expensesAdd.addEventListener('click', appData.addExpensesBlock);
incomeAdd.addEventListener('click', appData.addIncomeBlock);
document.addEventListener('click', appData.applyTextInput);
document.addEventListener('click', appData.applyDigitInput);
periodSelect.addEventListener('change', function() {
   document.querySelector('.period-amount').innerHTML = periodSelect.value;
  });
cancel.addEventListener('click', appData.reset);



