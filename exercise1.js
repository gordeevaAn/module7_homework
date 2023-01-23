/*Задание 1
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль 
все ключи и значения только собственных свойств.
 Данная функция не должна возвращать значение.*/

//РЕШЕНИЕ 1
const animals = {
    dog: 4,
    cat: 5,
    parrot: 7
  }
  function checkAnimals(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)){
        console.log(key)
    }
   }
  }
  checkAnimals(animals);
  
  /*РЕШЕНИЕ 2
  function checkAnimals(obj) {
   for (let key in obj) {
      if (obj.hasOwnProperty(key)){
      console.log(key, obj[key])
    }
   }
  }
  checkAnimals(animals);*/