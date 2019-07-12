'user-strict'

let book = document.querySelectorAll('.book');
    list = document.querySelector('.books');

list.insertBefore(book[1], book[0]);
list.insertBefore(book[4], book[2]);
list.insertBefore(book[2], null);

let body = document.querySelector('body');
body.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');

let a = document.querySelectorAll('a');
a[2].innerHTML = "Книга 3. this и Прототипы Объектов";

let adv = document.querySelector('.adv');
body.removeChild(adv);

let ul = document.querySelectorAll('ul');
    book2 = ul[1].querySelectorAll('li');
    book5 = ul[4].querySelectorAll('li');
    book6 = ul[5].querySelectorAll('li');
    

ul[1].insertBefore(book2[6], book2[4]);
ul[1].insertBefore(book2[8], book2[4]);
ul[1].insertBefore(book2[2], book2[10]);

ul[4].insertBefore(book5[9], book5[2]);
ul[4].insertBefore(book5[2], book5[6]);
ul[4].insertBefore(book5[5], book5[8]);


  let li = document.createElement("li");
  li.appendChild(document.createTextNode("Глава 8: За пределами ES6"));
  let newElem = ul[5].appendChild(li);

ul[5].insertBefore(newElem, book6[9]);
