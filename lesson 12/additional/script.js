document.addEventListener('DOMContentLoaded', function(){
'use strict';

let dayTime = document.querySelector('.dayTime'),
    weekDay = document.querySelector('.weekDay'),
    time = document.querySelector('.time'),
    newYear = document.querySelector('.newYear'),
    hours = new Date().getHours(),
    day = new Date().getDay(),
    currentTime = new Date().toLocaleTimeString();
    
function getDayTime() {
    if(hours >= 6 && hours < 12) dayTime.textContent = 'Доброе утро';
    else if(hours >= 12 && hours < 18) dayTime.textContent = 'Добрый день';
    else if(hours >= 18) dayTime.textContent = 'Добрый вечер';
    else if(hours >= 1) dayTime.textContent = 'Доброй ночи';
}

function getWeekDay(){
    let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];     
    weekDay.textContent = 'Сегодня: ' + week[day - 1];
}

function getTime() {
    time.textContent = 'Текущее время: ' + currentTime;
}

function getDaysToNewYear (){
    let ny = new Date('1 jan 2020').getTime(),
        now = new Date().getTime(),
        diff = Math.ceil((ny - now)/1000/60/60/24);
        newYear.textContent = 'До нового года осталось ' + diff + ' дней';
}

getDayTime();
getWeekDay();
getTime();
getDaysToNewYear();
});