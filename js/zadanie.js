'use strict';
/* Создайте функцию, которая принимает 1 аргумент (название произвольное)

— Если в качестве аргумента передана не строка - функция оповещает об этом пользователя

— В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце

— Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них появляются три точки (...) */
 const foo=(variable)=>{
if(typeof(variable)!=='string'){
  return 'typeof:',typeof('не строка',variable);
}else{
 let str = variable.trim();
  if(str.length > 29){
     str = variable.substring(0,29);
    str +='...';
    return str;
  }else{
    return str;
  }
}
 };
 let a =15;
 let b = ' 12345678910111213141516171819202 ';
 let c = ' abc ';
 console.log(foo(a));
 console.log(foo(b));
 console.log(foo(c));
 
 let gat = document.getElementById('day');
 gat.insertAdjacentHTML('beforeEnd',a);
 gat.insertAdjacentHTML('beforeEnd',b);
 gat.insertAdjacentHTML('beforeEnd',c);