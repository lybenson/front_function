// 模板方法模式
// 基于继承的设计模式
// 包含两部分: 抽象父类,封装了子类的算法框架和方法的执行顺序; 具体的实现子类


var Beverage = function () {}

Beverage.prototype.boilWater = function () {
  console.log('boilwater')
}
Beverage.prototype.brew = function() {
  throw new Error('子类必须重写brew方法')
} // 子类实现
Beverage.prototype.pourInCup = function() {
  throw new Error('子类必须重写pourInCup方法')
} // 子类实现
Beverage.prototype.addCondiments = function() {
  throw new Error('子类必须重写addCondiments方法')
} // 子类实现

// init 为模板方法，该方法封装了子类的算法框架，作为一个算法模板，指导子类以何种顺序去执行方法
Beverage.prototype.init = function() {
  this.boilWater()
  this.brew()
  this.pourInCup()
  this.addCondiments()
}


var Coffee = function () {}
Coffee.prototype = new Beverage()
Coffee.prototype.brew = function () {
  console.log('brew')
}
Coffee.prototype.pourInCup = function() {
  console.log('pourInCup')
} 
Coffee.prototype.addCondiments = function() {
  console.log('addCondiments')
}

var coffee = new Coffee()
coffee.init()
