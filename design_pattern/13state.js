// 状态模式
// 状态模式定义一个对象，这个对象可以通过管理其状态从而使得应用程序作出相应的变化。状态模式是一个非常常用的设计模式，它主要有两个角色组成：
// 环境类：拥有一个状态成员，可以修改其状态并作出相应反应。
// 状态类：表示一种状态，包含其相应的处理方法

// 略模式和状态模式的相同点是，它们都有一个上下文、一些策略或者状态类，上下文把请求委托给这些类来执行
// 策略模式中的各个策略类之间是平等又平行的，它们之间没有任何联系，所以客户必须熟知这些策略类的作用，以便客户可以随时主动切换算法
// 状态模式中，状态和状态对应的行为是早已被封装好的，状态之间的切换也早被规定完成，“改变行为”这件事情发生在状态模式内部。对客户来说，并不需要了解这些细节。


// 定义一个环境类，在这里也就是菜单对象，拥有一个状态成员，可以修改其状态并作出相应反应
var trafficLight = (function () {
    var currentLight = null;
    return {
      change: function (light) {
        currentLight = light;
        currentLight.go();
      }
  }
})();

// 定义状态类, 表示一种状态，包含其相应的处理方法
function RedLight() { }
RedLight.prototype.go = function () {
  console.log("this is red light");
}
function GreenLight() { }
GreenLight.prototype.go = function () {
  console.log("this is green light");
}
function YellowLight() { }
YellowLight.prototype.go = function () {
  console.log("this is yellow light");
}

trafficLight.change(new RedLight())
trafficLight.change(new YellowLight())



// 状态模式是状态机的实现之一，但在 JavaScript这种“无类”语言中，没有规定让状态对象一定要从类中创建而来。另外一点，JavaScript 可以非常方便地使用委托技术，并不需要事先让一个对象持有另一个对象

var Light = function(){
  this.button = null
};
Light.prototype.init = function(){
  var button = document.createElement('button')
  var self = this
  button.innerHTML = '已关灯'
  this.currState = FSM.off // 设置当前状态
  this.button = document.body.appendChild(button)
  this.button.onclick = function() {
    self.currState.buttonWasPressed.call( self ) // 把请求委托给 FSM 状态机
  }
}
var FSM = {
  off: {
    buttonWasPressed: function(){
      console.log( '关灯' )
      this.button.innerHTML = '下一次按我是开灯';
      this.currState = FSM.on
    }
  },
  on: {
    buttonWasPressed: function(){
      console.log( '开灯' )
      this.button.innerHTML = '下一次按我是关灯'
      this.currState = FSM.off
    }
  }
}
var light = new Light()
light.init()