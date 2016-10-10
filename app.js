var requiredConstructor = require('./car')

var yellowCar = new requiredConstructor(true, 'Red')



console.log('yellow Car speed is' + " " + yellowCar.speed);

yellowCar.accelerate(10);

console.log('yellow Car current color is' + " " + yellowCar.color);

yellowCar.setColor('Green');

console.log(yellowCar)
