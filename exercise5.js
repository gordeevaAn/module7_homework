//Задание 5.
//Переписать консольное приложение из предыдущего юнита на классы.


class ElectroDevice {
  constructor(name, power) {
    this.name = name;
      this.power = power;
    this.isPlugged = false;
  }
  plugIn() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
  }
  getPowerUse() {
    return this.isPlugged ? this.power : 0;
  }
} 
 const laptop = new ElectroDevice('Laptop', 60);
 const microwave = new ElectroDevice('Microwave', 600);

console.log(laptop.getPowerUse() + microwave.getPowerUse());

laptop.plugIn();
console.log(laptop.getPowerUse() + microwave.getPowerUse());
microwave.plugIn();
console.log(laptop.getPowerUse() + microwave.getPowerUse());