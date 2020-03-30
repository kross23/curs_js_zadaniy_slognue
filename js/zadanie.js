'use strict';

 let getWeekDay=(lan)=> {
  let date =  new Date();
  let daysRu = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  let dayEn = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let day = date.getDay();
  console.log(day);
  if(lan ==='ru'){
    console.log(daysRu);
    console.log(' текущий день недели', daysRu[day]);
  }else{
    console.log(dayEn);
    console.log('текущий день недели',dayEn[day]);
  }
};
let getWeekDay1 = (lan) => {
  let date =  new Date();
  let daysRu = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  let dayEn = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let day = date.getDay();

   switch (lan) {
    case 'ru':
      console.log(daysRu);
      console.log(' текущий день недели', daysRu[day]);
        break;
      case 'en':
        console.log(dayEn);
    console.log('текущий день недели',dayEn[day]);
        break;
  }
};
let getWeekDay2 = (lan) => {
  let date =  new Date();
  let day = date.getDay();
  let a = lan === 'en' ? 1:0;
  let useDay = [
      ['Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
      ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  ];
console.log(useDay[a][day]);
};
let html = document.querySelector('html');//document.getElementById('html');
let  langValue = html.getAttribute('lang'); 
getWeekDay(langValue);//через if
getWeekDay1(langValue);//через switch
getWeekDay2(langValue);// тернарный оператор
/* пункт 2
У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль 
“директор”, если значение “Максим” 
то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент” */
let namePerson = prompt('введи ваше имя');
namePerson ==='Артем'? console.log('директор'):namePerson ==='Максим'?console.log('преподаватель'):console.log('студент');
