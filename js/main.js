'use strict';

let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    incomeAdd = document.getElementsByTagName('button')[0],
    expensesAdd = document.getElementsByTagName('button')[1],
    depositCheck = document.querySelector('#deposit-check'),
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
    incomeItem = document.querySelectorAll('.income-items'),
    data = document.querySelector('.data'),
    inputs = data.getElementsByTagName('input'),
    depositBank = document.querySelector('.deposit-bank');
    

const AppData = function(){
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.period = 3;
}; 
    
AppData.prototype.start = function() {

    start.style.display = 'none';
    cancel.style.display = 'block';


    this.budget = +salaryAmount.value;

    this.disableInput();
    this.getExpenses(); 
    this.getIncome();
    this.getExpensesMonth();
    this.getInfoDeposit(); 
    this.getBudget();
    this.getAddData();

    this.showResult();
};

AppData.prototype.showResult = function() {
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
};

AppData.prototype.disableInput = function (){
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].type == 'text'){
            inputs[i].disabled = 'true';
        }
    }
};

AppData.prototype.getExpenses = function() {
    expensesItems.forEach( (item) => {
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== ''){
            this.expenses[itemExpenses] = cashExpenses;
        }  
    });
};

AppData.prototype.getBlocks = function(data, btn, elem) {
    let cloneItem = data[0].cloneNode(true);
    for (let i = 0; i < cloneItem.childNodes.length; i++) {
        cloneItem.childNodes[i].value = "";
    }
    data[0].parentNode.insertBefore(cloneItem, btn);
    data = document.querySelectorAll(elem);
    if(data.length === 3){
        btn.style.display = 'none';
    }
};

AppData.prototype.getIncome = function () {
    incomeItem.forEach( (item) => {
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if(itemIncome !== '' && cashIncome !== ''){
            this.income[itemIncome] = cashIncome;
        }   
    });
    for (let key in this.income){
        this.incomeMonth += +this.income[key];
    }
};

AppData.prototype.getAddData =  function() {

    let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== ''){
                appData.addExpenses.push(item);
            }
        });

    additionalIncomeItem.forEach(function(item){
        let itemValue = item.value.trim();
        if (itemValue !== ''){
            appData.addIncome.push(itemValue); 
        }
    });


};

AppData.prototype.getExpensesMonth = function() {
    for (let key in this.expenses){
        this.expensesMonth  += +this.expenses[key];
    }; 
};

AppData.prototype.getInfoDeposit = function(){
    if(this.deposit){
        this.percentDeposit = depositPercent.value;
        this.moneyDeposit = depositAmount.value;
    }
};

AppData.prototype.getBudget = function() {
    let month = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit)/12;
    this.budgetMonth = month;
    let day = Math.floor(this.budgetMonth / 30);
    this.budgetDay = day;
};

AppData.prototype.getTargetMonth = function() {
    return Math.ceil(targetAmount.value/this.budgetMonth);
};

AppData.prototype.calcPeriod = function () {
    return this.budgetMonth * periodSelect.value; 
};

AppData.prototype.getStartEnable = function() {
    if(salaryAmount.value !== ''){ 
        this.start();
    } 
};

AppData.prototype.applyDigitInput = function(){
    let inputDigit = document.querySelectorAll('input[placeholder= "Сумма"]');
    for(let i = 0; i<inputDigit.length; i++){
        inputDigit[i].addEventListener('input', function(){
            this.value = this.value.replace(/[^\d.]/g, '');
        });
    }
};

AppData.prototype.applyTextInput = function(){
    let inputText = document.querySelectorAll('input[placeholder= "Наименование"]');
    for(let i = 0; i<inputText.length; i++){
        inputText[i].addEventListener('input', function(){
            this.value = this.value.replace(/[^. ,а-я]/g, '');
        });
    }
};

AppData.prototype.reset = function() {
    location.reload();
};

AppData.prototype.eventsListeners = function() {
    start.addEventListener('click', appData.getStartEnable.bind(appData));
    expensesAdd.addEventListener('click', () => {
        appData.getBlocks(expensesItems, expensesAdd, '.expenses-items');
    });
    incomeAdd.addEventListener('click', () => {
        appData.getBlocks(incomeItem, incomeAdd, '.income-items');
    });
    document.addEventListener('click', appData.applyTextInput);
    document.addEventListener('click', appData.applyDigitInput);
    periodSelect.addEventListener('change', () => {
       document.querySelector('.period-amount').innerHTML = periodSelect.value;
      });
    cancel.addEventListener('click', appData.reset);
    
    depositCheck.addEventListener('change', () => {
        if(depositCheck.checked){
            depositBank.style.display = "inline-block";
            depositAmount.style.display = "inline-block"; 
            appData.deposit = 'true';
            depositBank.addEventListener('change', function(){
                let selectedIndex = this.options[this.selectedIndex].value;
                if(selectedIndex === 'other'){
                    depositPercent.style.display = 'inline-block';
                    depositPercent.value = '';
                } else {
                    depositPercent.style.display = 'none';
                    depositPercent.value = selectedIndex; 
                }
            });
        }else{
            depositBank.style.display = "none";
            depositAmount.style.display = "none";
            depositAmount.value = '';
            appData.deposit = 'false';
        }
    });
    
};

const appData = new AppData();

appData.eventsListeners();


