let h = new Date().getHours(),
    m = new Date().getMinutes(),
    s = new Date().getSeconds(),
    day = new Date().getDate(),
    month = new Date().getMonth() + 1,
    year = new Date().getFullYear();

function addZero(date) {
date = date.toString();
if(date.length == 1) return '0' + date;
else return date;
}

document.querySelector('body').innerHTML = h + ":" + m + ":" + s + " " + addZero(day) + "." + addZero(month) + "." + year ;

