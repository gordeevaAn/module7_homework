//Задание 3.
//Написать функцию, которая создает пустой объект, но без прототипа.


function newAnimalsObject(newObjAnim){
  newObjAnim = {};
  return newObjAnim;
};
const newAnimals = newAnimalsObject();
console.log(newAnimals);