// 享元模式
// 用于性能优化的模式,如果系统中因为创建了大量类似的对象而导致内存不足就可以使用这种模式



var Model = function (sex) {
  this.sex = sex;
  // this.underwear = underwear
}
Model.prototype.takePhoto = function () {
  console.log('sex=' + this.sex + 'underwear=' + this.underwear )
}

var maleModel = new Model('male');
var femaleModel = new Model('female');

// 避免了创建50个对象
for (var i = 1; i <=50; i++){
  maleModel.underwear = 'underwear' + i;
  maleModel.takePhoto();
}
for (var i = 1; i <=50; i++){
  female.underwear = 'underwear' + i;
  femaleModel.takePhoto();
}
