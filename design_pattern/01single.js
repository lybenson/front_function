// 单例模式
// 保证一个类仅有一个实例，并提供一个访问它的全局访问点。实现的方法为先判断实例存在与否，如果存在则直接返回，如果不存在就创建了再返回，这就确保了一个类只有一个实例对象

class User {
  constructor(name) {
    this.name = name;
    this.getName()
  }
  getName () {
    return this.name
  }
}

// 闭包, 保持 instance
var ProxyMode = (() => {
  var instance = null
  return function (name) {
    if (!instance) {
      instance = new User(name)
    }
    return instance
  }
})()

var a = new ProxyMode("a");
var b = new ProxyMode("b");

console.log(a === b);    //true 


