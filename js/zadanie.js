'use strict';

const day = () => {
  let arrWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  let d = document;
  let date = new Date();
  let day = date.getDay();
  //debugger;
  console.log(day);


  for (let i = 1; i < arrWeek.length; i++) {
    let tex = document.querySelector("#ol");             //получаем обьект по ID
    let p = document.createElement("LI");                // создаем элемент списка
    if (arrWeek[i] === 'Суббота') {                     // если индекс массива и номер выходных 
      p.classList.add('weekend');                        // присваивам класс 
    }
    if (i === day) {                                    // если индекс совпадает с текушим днем то присваиваем класс
      p.classList.add('curent');
    }
    p.innerHTML = arrWeek[i];                          // вкладываем в элемент содержимое массива    
    tex.appendChild(p);                                // вставлям в страницу
  }
  let tex = document.querySelector("#ol");             //получаем обьект по ID
  let p = document.createElement("LI");
  p.classList.add('weekend');                          // присваивам класс 

  if (0 === day) {                                     // если индекс совпадает с текушим днем то присваиваем класс
    p.classList.add('curent');
  }
  p.innerHTML = arrWeek[0];                            // вкладываем в элемент содержимое массива    
  tex.appendChild(p);
};

day();