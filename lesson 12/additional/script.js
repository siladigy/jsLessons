document.addEventListener('DOMContentLoaded', function(){
'use strict';

let hours = new Date().getHours(),
    day = new Date().getDay(),
    time = new Date().toLocaleTimeString();
    
function getDayTime() {
    if(hours >= 6 && hours < 12) document.write('Доброе утро');
    else if(hours >= 12 && hours < 18) document.write('Добрый день');
    else if(hours >= 18) document.write('Добрый вечер');
    else if(hours >= 1) document.write('Доброй ночи');
}

function getWeekDay(){
    let weekDay = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];     
    document.write('<br>Сегодня: ' + weekDay[day - 1]);
}

function getTime() {
    document.write('<br>Текущее время: ' + time);
}

function getDaysToNewYear (){
    let ny = new Date('1 jan 2020').getTime(),
        now = new Date().getTime(),
        diff = Math.ceil((ny - now)/1000/60/60/24);
    document.write('<br>До нового года осталось ' + diff + ' дней');
}

getDayTime();
getWeekDay();
getTime();
getDaysToNewYear();
});