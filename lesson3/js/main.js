let lang = "en";

let date = new Date(); 

if(lang == "ru") console.log( date.toLocaleString('ru', {weekday: 'long'}) );
else if (lang == "en") console.log( date.toLocaleString('en', {weekday: 'long'}) );

switch(lang){
    case "ru" : console.log( date.toLocaleString('ru', {weekday: 'long'}) );
    break;
    case "en" : console.log( date.toLocaleString('en', {weekday: 'long'}) );
    break;
}

	
let arr = {
    "ru" : ['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
    "en" : ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
console.log(arr[lang]);



namePerson = "Максим";

let result = namePerson == "Артем" ? "директор" : namePerson == "Максим" ? "преподаватель" : "студент";

console.log(result);