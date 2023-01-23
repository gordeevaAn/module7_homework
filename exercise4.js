/*Задание 4.
Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. 
Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку.
 Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 

Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). 
Выбрав прибор, подумайте, какими свойствами он обладает.*/


function ElectroDevice(name, power) {
  this.name = name,
  this.power = power,
    this.isPlugget = false
}
 ElectroDevice.prototype.plugIn = function (name) {
   console.log(this.name + ' is plugged!');
   this.isPlugged = true;
 };//вкл прибор

 ElectroDevice.prototype.unplug = function (name) {
   console.log(this.name + ' is unplugged!');
   this.isPlugged = false;
 };//выкл. прибор

ElectroDevice.prototype.getPowerUse = function () {
  return this.isPlugged ? this.power : 0;
 };//потребляемая мощность включенных устройств

const laptop = new ElectroDevice('Laptop', 60 );
const microwave = new ElectroDevice('Microwave', 600);

laptop.plugIn(60)
microwave.plugIn(600)
console.log(laptop.getPowerUse() + microwave.getPowerUse());