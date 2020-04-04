'use strict';

const day=()=>{
let arrWeek=['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
let d = document;
let date = new Date();
let day = date.getDay();
//debugger;
day-=1;
console.log(day);

day+='';
  for(let i in arrWeek){
    let tex = document.querySelector("#ol"); //получаем обьект по ID
    let p = document.createElement("LI");    // создаем элемент списка
      if(i ==='6'||i==='7') {                // если индекс массива и номер выходных 
        p.classList.add('weekend');          // присваивам класс 
    }else if(i === day){                     // если индекс совпадает с текушим днем то присваиваем класс
      p.classList.add('curent');
    }
  p.innerHTML = arrWeek[i];                  // вкладываем в элемент содержимое массива    
  tex.appendChild(p);                        // вставлям в страницу
  }
};
day();

//элемент.insertAdjacentText('beforeEnd', arrWeek[i]);
