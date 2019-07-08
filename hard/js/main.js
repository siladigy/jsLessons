let week = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

for (let day in week) {
  toDay = new Date().getDay() - 1
  if(day == toDay){
    document.write("<b>"+week[day]+ "</b><br>");
  } else if (week[day] == "суббота" || week[day] == "воскресенье") {
    document.write("<i>" + week[day] + "</i><br>");
  } else{
    document.write(week[day]+ "<br>");
  }
}