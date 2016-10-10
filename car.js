var Car = function (speed, color, convertible) {

  this.speed = 0;
  this.color = color;
  this.convertible = convertible;
  this.accelerate = function(addspeed) {

    this.speed += addspeed

  }
 this.setColor = function(addColor) {

    this.color = addColor
 }



}

// car.protoptype.accelerate = function(addspeed) {
//
//   this.speed += addspeed
// to set this function outside, must add prototype
// }


module.exports = Car
