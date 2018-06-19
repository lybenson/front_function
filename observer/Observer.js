/* 订阅者接口 */
function Watcher(name) {
  this.name = name

  this.deps = []
  this.newDeps = []
  this.depIds = new Set()
  this.newDepIds = new Set()

  // 观察者要实现的方法
  this.update = function() {
    console.log(this.name)
  }
}

/* 发布者接口 */
function Dep() {
  this.subs = [];
}
Dep.prototype = {
  // 通知所有观察者调用其update方法
  notifyObservers: function(context) {
    for(var i = 0, n = this.subs.length; i < n; i++) {
      this.subs[i].update(context);
    }
  },
  // 添加订阅者
  attach: function(observer){
    if(!observer.update) throw 'Wrong observer';
    this.subs.push(observer);
  },
  // 移除订阅者
  detach: function(observer) {
    if(!observer.update) { throw 'Wrong observer'; }
    this.subs.remove(observer);
  }
}

// 创建订阅者
let watch1 = new Watcher('watch1')
let watch2 = new Watcher('watch2')

// 创建发布者
let dep = new Dep()

// 发布者添加订阅者
dep.attach(watch1)
dep.attach(watch2)

// 发布者发布消息
dep.notifyObservers()

